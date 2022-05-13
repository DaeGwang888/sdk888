const db = require("../lib/database")
const { response } = require("express");



exports.findAllList = async function(){
    try{
        let sql = `SELECT * FROM TBL_TODO_LIST 
                   WHERE TL_DEL_YN = 'N'` ;
        let result =[];
        let [allList, fields] = await db.query(sql);
        for (let value of allList){
            let allListData = {
                seq: value.TL_SEQ,
                title: value.TL_TITLE,
                rows: []
            }
            result.push(allListData);
        }
        return result;
    }catch(error){
        return error
    }
}

exports.findAll = async function(){
    try {
        let sql = `SELECT * FROM TBL_TODO_LIST WHERE TL_DEL_YN = 'N'`;
        let result = [];
        let [todoList, fields] = await db.query(sql);
        for (let todo of todoList){
            // sql = `SELECT * FROM TBL_CARD_LIST WHERE CL_DEL_YN = 'N' AND CL_PARENT_SEQ = ${todo.TL_SEQ}` ;
            let listData = {
                id: todo.TL_SEQ,
                mode: 0,            // 0: 기본 값, 1: 쓰기 모드
                addCardTitle: "",   // 입력된 데이터를 받을 변수 선언
                name: todo.TL_TITLE,
                rows: []
            }
            
            let cardList = await this.getAllNode(todo.TL_SEQ);
            // console.log(cardList);
            // let [cardList, cardFields] = await db.query(sql);
            for (let card of cardList){
                let cardData = {
                    id: card.CL_SEQ,
                    mouseOver: 0,   // 마우스오버 이벤트 제어변수
                    name: card.CL_TITLE,
                    cl_todo_seq: card.TL_SEQ,
                }
                listData.rows.push(cardData);
            }   
            result.push(listData)        
        }

        return result;
    } catch(error) {
        return error
    }
}
exports.getAllNode = async function(todoSeq){
    // isNullTail=false, node
    try {
        let sql, result=[];
        // Head Search
        sql = `SELECT * FROM TBL_TODO_CARD WHERE CL_DEL_YN = 'N' AND CL_TODO_SEQ = ${todoSeq}`;
        let [head, field] = await db.query(sql);
        for(let TODO of head){
            result.push(TODO)
        }
            return result;
        
    } catch(e) {
        return e
    }
}

//insert
exports.insertList = async function(data){
    let sql = `INSERT INTO TBL_TODO_LIST(TL_TITLE) VALUES(?)`;
    let PARAMS = [data.TL_TITLE];
    db.query(sql,PARAMS, function(error, resultData){
        if(error)  {
          return error
        }else{
          response.json(resultData);
        }
    })
}


//insert card title
exports.insertCardTitle = async function(data){
    let sql = `INSERT INTO TBL_TODO_CARD(CL_TODO_SEQ, CL_TITLE) VALUES(?,?)`;
    let CARD = [data.CL_TODO_SEQ, data.CL_TITLE];
    
    db.query(sql, CARD, function(error, resultData){
        if(error){
            return error
        }else{
            response.json(resultData);
        }
    })
}

//update card title
exports.editCardTitle = async function (data){
    let sql = `UPDATE TBL_TODO_CARD SET CL_TITLE = ? WHERE CL_SEQ = ? AND CL_TODO_SEQ = ?`;
    let CARDTITLE = [data.CL_TITLE, data.CL_SEQ, data.CL_TODO_SEQ];
    db.query(sql, CARDTITLE, function(error, resultData){
        if(error){
            return error
        }else{
            response.json(resultData);
        }
    })
}

//TODO 삭제
exports.removeList =  async function(id) {
    let sql = `UPDATE TBL_TODO_LIST SET TL_DEL_YN ='Y' WHERE TL_SEQ = ?`;
    let TODOLIST = [id.TL_SEQ]
    console.log(TODOLIST);
    db.query(sql, TODOLIST, function(error, resultData){
        if(error){
            return error  
        }else{
            response.json(resultData);
        }
    })
}
//cardTitle 개별 삭제
exports.delCardTitle =  async function(seq) {
    let sql = `UPDATE TBL_TODO_CARD  SET CL_DEL_YN ='Y' WHERE CL_SEQ = ?`;
    let CARDLIST = [seq.CL_SEQ]
    db.query(sql, CARDLIST, function(error, resultData){
        if(error){
            return error  
        }else{
            response.json(resultData);
        }
    })
}


exports.moveTodoSeq =  async function(seq) {
    let sql = `UPDATE TBL_TODO_CARD  SET CL_TODO_SEQ = ? WHERE CL_SEQ = ?`;
    let SEQ = [seq.CL_TODO_SEQ, seq.CL_SEQ];
    db.query(sql, SEQ, function(error, resultData){
        if(error){
            return error  
        }else{
            response.json(resultData);
        }
    })
}

