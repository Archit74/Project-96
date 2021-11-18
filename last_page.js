const firebaseConfig = {
    apiKey: "AIzaSyAB0CEtC4nniwIUE7Dlac_KfQSZR0SmHnU",
    authDomain: "lets-chat-app-7420b.firebaseapp.com",
    databaseURL: "https://lets-chat-app-7420b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-7420b",
    storageBucket: "lets-chat-app-7420b.appspot.com",
    messagingSenderId: "513423111147",
    appId: "1:513423111147:web:03bc6e440d3c8c93115fae"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=  localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }
  function getData(){
firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output2").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h3>"+name+"<img class='user_tick' src='tick.png'></h3>";
message_tag="<h3>"+message+"</h3>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_tag+message_tag+like_button+span_with_tag;
document.getElementById("output2").innerHTML+=row;
} }); });
}
getData();
function logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("roomName");
    window.location="Chat_page_1.html"
  }
