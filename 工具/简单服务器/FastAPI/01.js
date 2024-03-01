function sendPostRequest(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8000/callback", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "message": data  // 修改这里以发送数组
    }));
}

sendPostRequest([1,4,5]);
