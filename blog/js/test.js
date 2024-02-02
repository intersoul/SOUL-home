function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // 将时间格式化为时:分
    var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

    // 更新网页上的时间显示
    document.getElementById('time').textContent = timeString;
}

// 每秒更新一次时间
setInterval(updateTime, 1000);


