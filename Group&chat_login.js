function login() {
    window.location = "Group&chat_login.html";
}

function add_user() {
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "Group&chat_room.html";
}

function back() {
    window.location = "Group&chat.html";
}
