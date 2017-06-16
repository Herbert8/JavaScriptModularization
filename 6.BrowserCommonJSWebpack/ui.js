

var makeStr = require('./util');

function showMsg(params) {
    var s = makeStr(params);
    console.log(s);
}


module.exports = showMsg;