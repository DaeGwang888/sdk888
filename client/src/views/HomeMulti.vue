<template>
  <div>
    <div id="itembox" class="itemBox" v-for="(element) in values" :key="element.id">
      <div class="itemHeader">
        <div class="title">
          {{element.name}}
        </div>
        <div class="toggle">
          <!-- ⋯ -->
        <span type="button" @click="delList(element.id)">전체지우기</span>
        </div>
      </div>
      <div class="itemBody">  
        <div class="draggable">
           <!--      v-bind:list="element.rows"(데이터바인딩 데이터와 UI통해 표시하고자 하는 데이터를 실제 데이터와 연결) change 이벤트는 요소(element)의 값이 변경될 때 발생 -->
           <!--      :속성명="데이터 or 함수"                                   change 이벤트는 요소(element)의 값이 변경될 때 발생 -->
          <draggable :list="element.rows" draggable=".item" group="itemGroup" @change="itemCardMove($event, element.id)"> 
          <div v-for="(item) in element.rows" :key="item.id" class="item">
            {{item.name}}
            <input type="button" value="카드삭제" @click="delCardTitle(item.id)">
            <div><input type="text" v-model="item.name" ></div>
            <div class="edit" @click="editTitle(item.id, element.id, item.name)">
              <span><font-awesome-icon icon="fa-regular fa-edit"/>수정</span>
            </div>
          </div>
          </draggable>
        </div>
      </div>
      
      <div class="itemFooter">
        <div class="btnBox" v-if="element.mode==0" @click="element.mode=1, num=element.id">
          <div class="addCardbtn">
          + 카드추가하기
          </div>
          <div class="btn-img">
            <font-awesome-icon icon="fa-regular fa-note-sticky" />
          </div>
        </div>
        <div class="regBox" style="padding:0px;" v-if="element.mode==1">
          <div>
            <input v-model="addCardTitle" type="text" placeholder="Enter item title for list..."> 
          </div>
          <div>
            <button class="addBtn" v-on:click="addCard()">카드 추가</button>
            <span class="cancleBtn" @click="element.mode=0">✖</span>
          </div>
        </div>
      </div>
    </div>


    <div class="addBox" @click="addMode=1" v-if="addMode==0" >
      <div>+ 목록 추가하기</div>
    </div>

    <div class="regBox" v-if="addMode==1">
      <div>
        <input v-model="addTitle" type="text" placeholder="Enter list title...">
      </div>
      <div>
        <button class="addBtn" v-on:click="addData">목록 추가</button> 
        <span @click="addMode=0" class="cancleBtn">✖</span>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import * as todoApi from '@/api/todo'

export default {

  components:{ 
    draggable 
  },

  data() {
    return {
      addCardTitle: '',
      addTitle: '',
      itembox: '', 
      list:'',
      num:0,
      addMode: 0,
      values: []
  }
},

  methods: {
    getDataLoad(){
      this.values = []
      todoApi.getList().then(res =>{
        console.log(res.data);
        res.data.forEach(element =>{
          this.values.push(element);
        })
        console.log(this.values);
      });
    },

    //itemCardMove를 클릭하면 ()의 값을 가져온다. 
    itemCardMove(event,id){
      console.log(event);
      console.log(id);
      if(event.added){
        // console.log(event.added);
        const itemGroup = event.added.element;
        this.moveTodoSeq(itemGroup.id, id);
      }
    },
    
    moveTodoSeq(CardSeq,ToDoSeq){
      // console.log(CardSeq); 46 
      // console.log(ToDoSeq); 74
      const data = {
        "CL_SEQ": CardSeq,
        "CL_TODO_SEQ": ToDoSeq
      }
      // {CL_SEQ: 46, CL_TODO_SEQ: 74}
      todoApi.moveTodoSeq(data).then(res=>{
        console.log(res);
        this.getDataLoad()
      })
    },


    //delete 밑에 카드 삭제
    delList(id) {
      const data = {
        "TL_SEQ" : id,
      }
      todoApi.removeList(data).then(res => {
        console.log(res);
        this.getDataLoad()
      })
    },
    
    //카드 타이틀만 삭제
    delCardTitle(seq){
      const cardSeq = {
        "CL_SEQ" : seq,
      }
      todoApi.delCardTitle(cardSeq).then(res => {
        console.log(res);
        this.getDataLoad();
      })
    },

    //목록 추가 
    addData : function () {
      if(this.addTitle){
        this.insertData(this.addTitle)
      }
    },
    insertData(title){
      const data = {
        "TL_TITLE" : title
      }
      todoApi.insertList(data).then(res => {
        console.log(res);
        this.getDataLoad()
      });
    },


    //카드 내용 추가
    addCard : function (){
      if(this.addCardTitle){
        this.insertCardTitle(this.addCardTitle, this.num)
      }
    },
    insertCardTitle(cardTitle, num){
      const CardData = {
        "CL_TODO_SEQ" : num,
        "CL_TITLE" : cardTitle
      }
      console.log(CardData);
      todoApi.insertCardTitle(CardData).then(res =>{
        console.log(res);
        this.getDataLoad()
      })
    },

    //edit card title
    editTitle(cardSeq, listSeq, cardTitle){
      const data = {
        "CL_SEQ": cardSeq,
        "CL_TODO_SEQ": listSeq,
        "CL_TITLE": cardTitle
      }
      console.log(data);
      todoApi.editCardTitle(data).then(res => {
        console.log(res);
        this.getDataLoad()
      })      
    },
    
  },




  // data&events가 활성화 접근
  // 인스턴스가 작성된 후 동기적 호출,
  // 부모,자식 관계 컴퍼넌트가 랜더링 될 때 부모,자식 순 실행
  // 데이터 초기화 선언을 created()에서 많이 한다.
  created() {
    this.getDataLoad()
  }
  
}

</script>
