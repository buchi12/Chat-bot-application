let chatbotMsgList = ["Hi,iam a enterainment bot.", "Hey", "hi,have a niceday", "Good Evening", "How can I help you?", "how are you", "this bot created by buchi", "plz provide your name", "wheather is very cool", "hello thanks for connecting with as over messanger","how can can i assest you today","I build using html, css, js", "iam not Ai based boot",];

let inputid = document.getElementById("userInput");
let bt = document.getElementById("sendMsgBtn");
let chatcontainer = document.getElementById("chatContainer");

bt.onclick = function() {
    let usermsg = inputid.value;

    let container = document.createElement("div");
    container.classList.add("msg-to-chatbot-container");
    chatcontainer.appendChild(container);

    let span = document.createElement("span");
    span.textContent = usermsg;
    span.classList.add("msg-to-chatbot");
    container.appendChild(span);
    inputid.value = "";

    getreplayFromboot();
}

function getreplayFromboot() {
    let lenarr = chatbotMsgList.length;
    let chactboxre = chatbotMsgList[Math.ceil(Math.random() * lenarr) - 1];

    let container1 = document.createElement("div");
    container1.classList.add("msg-to-chatbot-container1");
    chatcontainer.appendChild(container1);

    let span1 = document.createElement("span");
    span1.textContent = chactboxre;
    span1.classList.add("msg-from-chatbot");
    container1.appendChild(span1);


}
