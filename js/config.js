$(function () {
    /* 一，时间戳处理：*/
    _Time = function (time, flag) {
        if (time !== "" && time !== null) {
            time = new Date(parseInt(time) * 1000);
            var month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
            var currentDate = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
            var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
            var minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
            var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
            if (flag == 0 || flag == "" || flag == null) {
                return time.getFullYear() + "-" + month + "-" + currentDate + " " + hour + ":" + minute + ":" + second
            } else if (flag == 1) {
                return time.getFullYear() + "年" + month + "月" + currentDate + "日 " + hour + ":" + minute + ":" + second
            } else if (flag == 2) {
                return time.getFullYear() + "." + month + "." + currentDate + " " + hour + ":" + minute + ":" + second
            } else if (flag == 3) {
                return time.getFullYear() + "/" + month + "/" + currentDate + " " + hour + ":" + minute + ":" + second
            }
        } else {
            return ""
        }
    }
    __Time = function (time, flag) {
        if (time !== "" && time !== null) {
            time = new Date(parseInt(time) * 1000);
            var month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
            var currentDate = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
            var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
            var minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
            var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
            if (flag == 0 || flag == "" || flag == null) {
                return time.getFullYear() + "年" + month + "月" + currentDate + "日 "
            } else if (flag == 1) {
                return time.getFullYear() + "-" + month + "-" + currentDate
            } else if (flag == 2) {
                return time.getFullYear() + "." + month + "." + currentDate
            } else if (flag == 3) {
                return time.getFullYear() + "/" + month + "/" + currentDate
            }
        } else {
            return ""
        }
    }

    /* 二，时间戳为/data(1477386005)/时：*/
    _dataTime = function (time, flag) {
        if (time !== "" && time !== null) {
            var data = time.replace("/data(", "").replace("/Data(", "").replace(")/", "");
            time = new Date(parseInt(data) * 1000);
            var month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
            var currentDate = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
            var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
            var minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
            var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
            if (flag == 0 || flag == "" || flag == null) {
                return time.getFullYear() + "年" + month + "月" + currentDate + "日 " + hour + ":" + minute + ":" + second
            } else if (flag == 1) {
                return time.getFullYear() + "-" + month + "-" + currentDate + " " + hour + ":" + minute + ":" + second
            } else if (flag == 2) {
                return time.getFullYear() + "." + month + "." + currentDate + " " + hour + ":" + minute + ":" + second
            } else if (flag == 3) {
                return time.getFullYear() + "/" + month + "/" + currentDate + " " + hour + ":" + minute + ":" + second
            }
        } else {
            return ""
        }
    }
    __dataTime = function (time, flag) {
        if (time !== "" && time !== null) {
            var data = time.replace("/data(", "").replace("/Data(", "").replace(")/", "");
            time = new Date(parseInt(data) * 1000);
            var month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
            var currentDate = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
            var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
            var minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
            var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
            if (flag == 0 || flag == "" || flag == null) {
                return time.getFullYear() + "年" + month + "月" + currentDate + "日 "
            } else if (flag == 1) {
                return time.getFullYear() + "-" + month + "-" + currentDate
            } else if (flag == 2) {
                return time.getFullYear() + "." + month + "." + currentDate
            } else if (flag == 3) {
                return time.getFullYear() + "/" + month + "/" + currentDate
            }
        } else {
            return ""
        }
    }

    // 三，当前日期：
    var date = new Date();
    formatDate = function (date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year + "年" + month + "月" + day + "日"].join();
    }

    date = formatDate(date);


    /* 四，取随机数*/
    radom = function (size) {
        //x上限，y下限
        var x = 9;
        var y = 0;
        var rand = ""
        if (size == "" || size == null) {
            for (var i = 1; i <= 6; i++) {
                rand += parseInt(Math.random() * (x - y + 1) + y);
            }//默认为6位
        } else {
            for (var i = 1; i <= size; i++) {
                rand += parseInt(Math.random() * (x - y + 1) + y);
            }
        }
        return rand
    }

    // /*  */
    // var a = parseInt(Math.random() * 11)
    //
    // alert(a)

});
// /*二，封装的插件：*/
// (function ($) {
//     $.fn.dateTime = function (time) {

//     }
// })(jquery)




