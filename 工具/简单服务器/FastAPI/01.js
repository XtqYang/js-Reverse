// async function sendGetRequest() {
//     const dataToSend = "Hello, server!";
//     const url = `http://127.0.0.1:8000/callback?message=${(dataToSend)}`;
//     await fetch(url);
// }
// // 调用函数发送请求
// sendGetRequest();


function sendPostRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8000/callback", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "message": {
            "_yrxQ9C": "_yrxQ9C",
            "_yrxQ9C[9]": "_yrxQ9C[9]",
            "_yrxQ9C[901]": "_yrxQXc[_yrxQ9C[9]]('div')",
        }
    }));
}

sendPostRequest();