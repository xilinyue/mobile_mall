const request = require("request");

const z = require('./util');

let iid = "1mv25sa";
let param1 = '{"appPlat":"m","plat":"h5","pageSize":12,"pid":"5018","iidE":"1mv25sa"}';
let a = z(param1);
let t = String(Date.now());
console.log(z("100028&iOS&"+ t +"&NMMain@mgj_h5_1.0&36234043-8e9e-401a-94d6-9aaed546adda&mwp.darwin.get&3&"+ a +"&f89bea47ffc252a11386b0a2a23e41a6_1597407400132"));

/**
 * https://api.mogu.com/h5/http.detail.api/1/?data=%7B%22appPlat%22%3A%22m%22%2C%22sourceParams%22%3A%22%22%2C%22template%22%3A%221-2-detail_normal-1.0.0%22%2C%22iid%22%3A%221mv25sa%22%2C%22activityId%22%3A%22%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t=1597476573571&mw-uuid=36234043-8e9e-401a-94d6-9aaed546adda&mw-h5-os=iOS&mw-sign=2b43b7b949eb87b20600f7edc8e9057c&callback=mwpCb1&_=1597476573573
 * 
 * 
 */

 /**
  * 1====  {"appPlat":"m","plat":"h5","pageSize":12,"pid":"5018","iidE":"1mv25sa"}
  * 2==== "100028&iOS&1597478240373&NMMain@mgj_h5_1.0&36234043-8e9e-401a-94d6-9aaed546adda&mwp.darwin.get&3&e8a2db7f749f76afac435ded348af6a9&f89bea47ffc252a11386b0a2a23e41a6_1597407400132"
  */