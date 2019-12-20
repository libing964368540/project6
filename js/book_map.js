window.onload = function () {
    judge(450, 160);  //传入坐标
    // 判断信息框的方向
    function judge(x, y) {
        let elem = document.getElementById('info-box'),
            pos = document.getElementById('pos'),
            w = elem.offsetWidth,
            h = elem.offsetHeight,
            m = x,
            n = y + 150;
        pos.style.left = x + "px";
        pos.style.top = y + "px";
        if (w + x >= 1920 - 200) {
            m = x - w;
        }
        if (h + y >= 1080 - 150) {
            n = y - h - 150;
        }
        address(m, n)
    }

    //设置信息框的坐标
    function address(m, n) {
        let elem = document.getElementById('info-box');
        elem.style.left = m + "px";
        elem.style.top = n + "px";
    }

    //在此层动画
    scale(6);

    function scale(index) {
        index = index - 1;
        let box = document.querySelector('.bookshelf'),
            boxLi = box.querySelectorAll('li');
        boxLi[index].innerText = "在此层";
    }
// ------------改动--------------
    //返回事件
    let backUp = document.getElementById('back'),
        backInfoUp = document.getElementById('backUp');
    backUp.onclick = function () {
        end()
    };
    backInfoUp.onclick = function () {
        end()
    };

    function end() {
        window.history.go(-1);
    }
// ------------改动--------------
    // 信息框消失隐藏：
    let pos = document.getElementById('pos'),
        flog = true,
        box = document.getElementById('info-box');
    pos.onclick = function () {
        touchs()
    };

    function touchs() {
        if (flog) {
            box.style.display = "none";
            flog = false
        } else {
            box.style.display = "block";
            flog = true
        }
    }
// ------------改动--------------
    // hear:
    function hear(x, y) {
        let hear = document.getElementById('hear');
        hear.style.left = x + "px";
        hear.style.top = y + "px";
        hear.style.display = "block";
    }

    hear(500, 200)
// ------------改动--------------
};