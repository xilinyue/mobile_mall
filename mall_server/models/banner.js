var db = require('./db.js');
function Banner(banner) {
    this.id=banner.id;
    this.img_url = banner.imgUrl;
    this.img_href = banner.imgHref;
};
Banner.addBanner = function (banner, callback) {
  var selectSql = 'insert into banner (id,img_url,img_href)  values (null,?,?)';
  db.query(selectSql, [banner.imgUrl,banner.imgHref], function (err, result) {
    if (err) {
      return callback(err);
    }
    callback(err, result);
  });
};
Banner.selectAllBanner = function (callback) {
	var selectSql = 'SELECT * FROM banner';
	db.query(selectSql,function (err, result) {
		if (err) {
			return callback(err);
		}
		callback(err, result);
	});
};

module.exports = Banner;