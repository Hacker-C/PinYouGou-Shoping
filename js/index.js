window.addEventListener('load', function () {
    // 获取方向图标和图片
    let arrowL = document.querySelector('.arrow-l');
    let arrowR = document.querySelector('.arrow-r');
    let focus = document.querySelector('.focus');
    // 鼠标移入/移出，方向图标出现/消失
    focus.addEventListener('mousemove', function () {
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
        clearInterval(timer);
        timer = null;

    })
    focus.addEventListener('mouseleave', function () {
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
        timer = window.setInterval(function () {
            arrowR.click();
        }, 2500);
    })

    // 获取图片ul
    let ul = focus.querySelector('ul');
    // 动态生成小圆点
    let circle = focus.querySelector('ol');
    let len = ul.children.length;
    // 克隆图片第一个节点
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    let num = 0;
    let circleNum = 0;
    for (let i = 0; i < len; i++) {
        let li = document.createElement('li');
        // 给每个li设置自定属性 index
        li.setAttribute('index', i);
        circle.appendChild(li);
        // 点击小圆圈，排他算法
        circle.children[i].addEventListener('click', function () {
            for (let j = 0; j < circle.children.length; j++) {
                circle.children[j].className = '';
            }
            this.className = 'current';
            // 点击小圆圈，移动图片
            let index = this.getAttribute('index');
            num = index;
            circleNum = index;
            console.log(index);
            let focusWidth = focus.offsetWidth;
            let target = index * focusWidth;
            animate(ul, - target);
        })
    }
    circle.children[0].className = 'current';
    // 点击右方向键切换图片
    // 设置节流阀
    let flag = true;
    arrowR.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num === ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, - num * focus.offsetWidth, function () {
                flag = true;
            });
            circleNum++;
            if (circleNum === 4) {
                circleNum = 0;
            }
            for (let i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            circle.children[circleNum].className = 'current';
        }

    })

    // 左边
    arrowL.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = - num * focus.offsetWidth + 'px';
            }
            num--;
            animate(ul, - num * focus.offsetWidth, function () {
                flag = true;
            });
            circleNum--;
            if (circleNum < 0) {
                circleNum = circle.children.length - 1;
            }
            for (let i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            circle.children[circleNum].className = 'current';
        }
    })

    // 自动切换
    let timer = this.window.setInterval(function () {
        arrowR.click();
    }, 2500);

})
