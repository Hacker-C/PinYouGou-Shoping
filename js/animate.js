function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 缓冲动画核心算法
        let step = target - obj.offsetLeft;
        step = step >= 0 ? Math.ceil(step / 10) : Math.floor(step / 10);
        // console.log(step);
        if (obj.offsetLeft === target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
}