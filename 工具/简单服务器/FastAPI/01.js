// async function sendGetRequest() {
//     const dataToSend = "Hello, server!";
//     const url = `http://127.0.0.1:8000/callback?message=${(dataToSend)}`;
//     await fetch(url);
// }
// // 调用函数发送请求
// sendGetRequest();

function sendGetRequest() {
    var xhr = new XMLHttpRequest();
    dataToSend = _yrxQ9C[9]
    xhr.open("GET", "http://127.0.0.1:8000/callback?message=" + dataToSend, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send();
}

sendGetRequest();
