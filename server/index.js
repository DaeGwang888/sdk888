'use strict'

const express = require('express')
//CORS = 자신이 속하지 않은 다른 도메인, 다른 프로토콜, 혹은 다른 포트에 있는 리소스를 요청하는 cross-origin HTTP 요청 방식
const cors = require('cors');
const app = express()
const routes_path = require('./routes/index.js')

// request * 허용
const runType = "DEV"

if(runType == "DEV"){
    app.use(cors())
}

// Post 요청을 사용하기 위해 미들웨어 사용
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use('/', routes_path);


app.listen(5000, function(){
    console.log("node.js port 5000에서 시작")
})

module.exports = app;