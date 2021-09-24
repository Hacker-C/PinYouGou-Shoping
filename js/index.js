window.addEventListener('load', function () {
    // 获取方向图标和图片
    let arrowL = document.querySelector('.arrow-l');
    let arrowR = document.querySelector('.arrow-r');
    let focus = document.querySelector('.focus');
    // 鼠标移入/移出，方向图标出现/消失
    focus.addEventListener('mousemove', function () {
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
    })
    focus.addEventListener('mouseleave', function () {
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
    })
    // 动态生成小圆点
    let ul = focus.querySelector('ul');
    let circle = focus.querySelector('ol');
    let len = ul.children.length;
    for (let i = 0; i < len; i++) {
        let li = document.createElement('li');
        circle.appendChild(li);
    }
    circle.children[0].className = 'current';
    // 点击小圆圈，排他算法
    for (let i = 0; i < circle.children.length; i++) {
        circle.children[i].addEventListener('click', function () {
            for (let j = 0; j < circle.children.length; j++) {
                circle.children[j].className = '';
            }
            this.className = 'current';
        })
    }
})
