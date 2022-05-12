// 'use strict'
const express = require("express");
const router = express.Router();

/**
 * router 선언
 */

const toDoController = require("../controllers/toDoController")
    router.get("/api/getList", toDoController.findAll);
    router.get("/api/getAllList", toDoController.findAllList);
    router.post("/api/insertList", toDoController.insertList);
    router.post("/api/insertCardTitle", toDoController.insertCardTitle);
    router.post("/api/removeList", toDoController.removeList);
    router.post("/api/editCardTitle", toDoController.editCardTitle);
    router.post("/api/delCardTitle", toDoController.delCardTitle)


router.get('/', (req, res) => {
    res.send('404 . Not Found!')
  })

module.exports = router;