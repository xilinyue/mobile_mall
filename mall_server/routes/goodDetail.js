const express = require("express");
const goodDetailModel = require("../db/goodDetailModel");
let router = express.Router();

// 根据商品iid获取商品详情数据
router.get("/getGoodDetailByIid",(req,res) => {
	let iid = req.query.iid;
	goodDetailModel.findOne({iid},{__v: 0}).then(doc => {
		res.send({
			code: 0,
			message: "数据获取成功",
			data: doc
		});
	})
});

module.exports = router;