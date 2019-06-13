// 把json对象的键全部转换成小写
function toLowerKey(data) {
    for (let key in data) {
        data[key.toLowerCase()] = data[key];
        delete data[key]
    }
    return data;
}

// 拼接参数
function objToStr(val) {
    if (val) {
        let params = '';
        for (let x in val) {
            if (val[x]) {
                params += `${x}=${val[x]}&`
            }
        }
        params = params.substr(0, params.length - 1);
        return params
    }
}

// 获取当前时间
function time() {
    // 时间戳格式
    let time = new Date().valueOf()
    //  日期格式 2018-11-12
    let date = new Date().toJSON().split("T")[0]
}

// unix时间戳转换
function formatTime(unixtime) {
    var dateTime = new Date(parseInt(unixtime) * 1000)
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    var now = new Date();
    var now_new = Date.parse(now.toDateString());  //typescript转换写法  
    var milliseconds = now_new - dateTime;
    var timeSpanStr = year + '.' + checkTime(month) + '.' + checkTime(day);
    // var timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    return timeSpanStr;
}

// 防止频繁点击，多次请求
function debounce(method, delay) {
    let timer = null;
    return function () {
        let self = this,
            args = arguments;
        timer && clearTimeout(timer);
        timer = setTimeout(function () {
            method.apply(self, args);
        }, delay);
    };
}

// 异步解决方案1 立即执行函数
function funcTest() {
    for (var i = 0; i < 11; i++) {
        (function (e) {
            setTimeout(function () {
                console.log(e)
            }, e * 1000);
        })(i);
    }
}

// 异步解决方案2 async
var sleep = () => new Promise(resolve => setTimeout(resolve, 1000))
async function asyncTest() {
    for (let i = 0; i < 5; i++) {
        await sleep()
        console.log("1")
    }
}


// 处理精度差异
// 我们要把需要计算的数字乘以 10 的 n 次幂，换算成计算机能够精确识别的整数，然后再除以 10 的 n 次幂，大部分编程语言都是这样处理精度差异的，我们就借用过来处理一下 JS 中的浮点数精度误差。
formatNum = function (f, digit) {
    var m = Math.pow(10, digit);
    return parseInt(f * m, 10) / m;
}

var num1 = 0.1;
var num2 = 0.2;

alert(formatNum(num1 + num2, 1) === 0.3);