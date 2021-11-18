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
  user_name=  localStorage.getItem("user");
document.getElementById("user_name1").innerHTML="Welcome: " + user_name
   function getData()
   {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
   {childKey = childSnapshot.key; Room_names = childKey;}
   )
;}
);
}
getData();
function addRoom(){
  get_input=document.getElementById("room_name").value;
  firebase.database().ref("/").child(get_input).update({
   purpose:"adding the room name"
  });
localStorage.setItem("roomName",get_input);
window.location="Chat_page.html";
}
function logout(){
  localStorage.removeItem("user");
  localStorage.removeItem("roomName");
  window.location="Chat_page_1.html"
}