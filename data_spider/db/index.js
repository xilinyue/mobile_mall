const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mobile_mall",{useNewUrlParser: true, useUnifiedTopology: true},() => {
    console.log("数据库连接成功");
});

module.exports = mongoose;