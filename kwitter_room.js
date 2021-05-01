var firebaseConfig = {
    apiKey: "AIzaSyCKrqRbjzQy4Jf_YBl3FSkO2DN5vERxSuE",
    authDomain: "tic-tac-toe-a8fec.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-a8fec-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-a8fec",
    storageBucket: "tic-tac-toe-a8fec.appspot.com",
    messagingSenderId: "262306950940",
    appId: "1:262306950940:web:da7e901bae01e9a9ec54d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey =
  childSnapshot.key;
   Room_names = childKey;

   user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

   //Start code
   console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function logout(){
   localStorage.removeItem("username");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}