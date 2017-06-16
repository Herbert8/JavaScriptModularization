
define(['./util'], function (makeStr) {

    function showMsg(params) {
        var s = makeStr(params);
        console.log(s);
    }


    return showMsg;

});