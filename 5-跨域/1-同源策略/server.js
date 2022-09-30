const express = require('express');

const app = express();

app.get('/home', (request, response)=>{
    // 响应一个页面
    response.sendFile(__dirname + '/index.html')
})

app.get('/data', (request, response)=>{
    response.send('用户数据')
});

// 4. 监听端口启动服务
app.listen(5500, ()=>{
    console.log('服务已经启动，5500端口监听中。。。。')
})