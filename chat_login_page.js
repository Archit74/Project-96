username="";
function adduser(){
    username= document.getElementById("input_name").value;
    localStorage.setItem("user",username);
    window.location="Chat_room.html";
}