var firebaseConfig = {
      apiKey: "AIzaSyDDxzaeYuMC4XzZB8G0IqvPSfC08y0wtB4",
      authDomain: "prj94-9ec15.firebaseapp.com",
      databaseURL: "https://prj94-9ec15-default-rtdb.firebaseio.com",
      projectId: "prj94-9ec15",
      storageBucket: "prj94-9ec15.appspot.com",
      messagingSenderId: "285123617679",
      appId: "1:285123617679:web:7266575c621bcbf96861fa"
    };
    
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("user_name");
    document.getElementById("dcu").innerHTML = "Welcome " + username + "!";
    
function addRoom() {
    
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });
    
      localStorage.setItem("room_name", room_name);
    
      window.location = "kwitter_room.html";
    
}
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          
    
          console.log("Room Names - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
    
    
          });});}
    
    getData();
    
    function redirectToRoomName(name) {
    
          console.log(name);
          localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
    
    }
    
    function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";

}

    
    
    