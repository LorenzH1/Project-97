var firebaseConfig = {
    apiKey: "AIzaSyA3mm8bfBIwgHiN6BepMzSCXTdLs7YM7FE",
    authDomain: "groupchat-5bd82.firebaseapp.com",
    databaseURL: "https://groupchat-5bd82-default-rtdb.firebaseio.com",
    projectId: "groupchat-5bd82",
    storageBucket: "groupchat-5bd82.appspot.com",
    messagingSenderId: "354213929588",
    appId: "1:354213929588:web:f364bdfead8789a8472721"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("username");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function add_room() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room names"
    });

    localStorage.setItem("room_name", room_name);

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room-name " +Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'>#"+ Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row; 
   });});}
getData();

function redirect_to_room_name(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Group&chat_page.html";
}

function logout() {
    localStorage.removeItem(user_name);
    localStorage.removeItem(room_name);
    window.location = "Group&chat_login.html";
}