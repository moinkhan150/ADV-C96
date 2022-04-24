
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD8lu7Jcpl-Ke_hOQdQboOjja5jtTmFBp8",
      authDomain: "my-chat-fa97e.firebaseapp.com",
      databaseURL: "https://my-chat-fa97e-default-rtdb.firebaseio.com",
      projectId: "my-chat-fa97e",
      storageBucket: "my-chat-fa97e.appspot.com",
      messagingSenderId: "19149191852",
      appId: "1:19149191852:web:2410a4f409ac7d83c17d09",
      measurementId: "G-CQ2BQNH2WF"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "WELCOME " + user_name + "!";

function removeRoom()
{
      localStorage.removeItem("room_name");
}