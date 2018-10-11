// 解析域名
function parseURL(url) {
    var url = url.split("?")[1];
    if (url) {
        var para = url.split("&");
        var len = para.length;
        var res = {};
        var arr = [];
        for (var i = 0; i < len; i++) {
            arr = para[i].split("=");
            res[arr[0]] = arr[1];
        }
        return res;
    }

};
// 改时间戳时间转化为标准格式
function timeChange(time) {
    if (time != null) {
        var date = new Date(time);
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10
            ? '0' + (date.getMonth() + 1)
            : date.getMonth() + 1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = date.getMinutes() + ':';
        s = date.getSeconds();
        return Y + M + D + h + m + s;
    } else {
        return ''
    }
};
// 获取当前时间的前一天
function getYestoday(date) {
    var yesterday_milliseconds = date.getTime() - 1000 * 60 * 60 * 24;
    var yesterday = new Date();
    yesterday.setTime(yesterday_milliseconds);

    var strYear = yesterday.getFullYear();
    var strDay = yesterday.getDate();
    var strMonth = yesterday.getMonth() + 1;
    if (strMonth < 10) {
        strMonth = '0' + strMonth;
    }
    datastr = strYear + '-'  + strMonth + '-'+ strDay;
    return datastr;
}

// 获取本月天数
function getMonthDays() {
    var myDate = new Date(),
        myyear = myDate.getFullYear(),
        mymonth = myDate.getMonth() + 1,
        arr = [];
    function getLastDay(myyear, mymonth) {
        var new_date = new Date(myyear, mymonth, 0);
        return new_date.getDate();
    };
    for (var i = 1; i <= getLastDay(myyear, mymonth); i++) {
        arr.push(mymonth + '月' + i + '日')
    };
    return arr;
}
function validateIdCard(idCard) {
    //15位和18位身份证号码的正则表达式
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

    //如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (regIdCard.test(idCard)) {
        if (idCard.length == 18) {
            var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
            var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
            var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
            for (var i = 0; i < 17; i++) {
                idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
            }
            var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
            var idCardLast = idCard.substring(17); //得到最后一位身份证号码
            //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
            if (idCardMod == 2) {
                if (idCardLast == "X" || idCardLast == "x") {
                    return true;
                } else {
                    return false;
                }
            } else {
                //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                if (idCardLast == idCardY[idCardMod]) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    } else {
        return false;
    }
}