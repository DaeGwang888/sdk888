'use strict'

const { request } = require("http");
const ToDo = require("../models/toDoModel")

const findAll = async function (req, res) {
    let result = await ToDo.findAll();
    res.status(200).json(result);
}

const findAllList = async function (req, res){
    let result = await ToDo.findAllList();
    res.status(200).json(result);
}

//insert
const insertList = async function (req, res){
    console.log(req.body);
    const data = {
        "TL_TITLE" : req.body.TL_TITLE,
    }
    let result = await ToDo.insertList(data);
    res.status(200).json(result);
}

//delete
const removeList = async function (req, res){
    console.log(req.body);
    const id = {
        "TL_SEQ" : req.body.TL_SEQ,
    }
    let result = await ToDo.removeList(id);
    res.status(200).json(result);
}


//insert Card title
const insertCardTitle = async function (req, res){
    console.log(req.body);
    const data = {
        "CL_TODO_SEQ" : req.body.CL_TODO_SEQ,
        "CL_TITLE" : req.body.CL_TITLE
    }
    let result = await ToDo.insertCardTitle(data);
    res.status(200).json(result);
}

//edit card title
const editCardTitle = async function (req, res){
    console.log(req.body);
    // [0] { CL_TITLE: '1번 목록 추가11', CL_SEQ: 56, CL_TODO_SEQ: 323 }
    const data = {
        "CL_TITLE" : req.body.CL_TITLE,
        "CL_SEQ" : req.body.CL_SEQ,
        "CL_TODO_SEQ" : req.body.CL_TODO_SEQ
    }
    let result = await ToDo.editCardTitle(data);
    res.status(200).json(result);
}
//delete card title
const delCardTitle = async function (req, res){
     const cardSeq = {
         "CL_SEQ" : req.body.CL_SEQ,
     }
     let result = await ToDo.delCardTitle(cardSeq);
     res.status(200).json(result);
}

/**
 * 
 * @param {*} todoSeq 
 * @param {*} futureIndex 
 * @returns 
 */

module.exports = {
    findAll,
    findAllList,
    insertList,
    removeList,
    insertCardTitle,
    editCardTitle,
    delCardTitle,
}