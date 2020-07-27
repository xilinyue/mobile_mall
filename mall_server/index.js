const express = require('express');

let app = express();

//设置允许跨域访问
app.use((req,res,next) => {
    res.header({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': req.headers.origin || '',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/json;charset=utf-8'
    });
    if(req.method === 'OPTIONS') {
        res.sendStatus(200);
    }else{
        next();
    }
  });

//简单测试数据
app.get("/home/multiData",(req,res) => {
    res.send({
        code: 0,
        msg: "数据获取成功",
        data: {
            banner: [
                {image: 'https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg', link: ''},
                {image: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg', link: ''},
                {image: 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/130290/23/5440/138761/5f1e502fEe39095bf/b4a51225c175b407.jpg!cr_1125x445_0_171!q70.jpg.dpg', link: ''},
                {image: 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/92420/17/17641/219531/5e8ae370Ef5ec5a67/fd53ee89665bde00.jpg!cr_1125x445_0_171!q70.jpg.dpg', link: ''}
            ],
            recommend: []
        }
    });
});

app.listen(3000, () => {
    console.log("服务器运行在 http://localhost:3000");
});