
//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyBQ0O42Vk6ggERB461rA7ejo9tWs0mFjQM",
      authDomain: "red-social-d92d0.firebaseapp.com",
      databaseURL: "https://red-social-d92d0-default-rtdb.firebaseio.com",
      projectId: "red-social-d92d0",
      storageBucket: "red-social-d92d0.appspot.com",
      messagingSenderId: "284321303450",
      appId: "1:284321303450:web:c3bb4646463a3462cc4823"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "¡Bienvenido "+user_name+"!";
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
row = "<div class= 'room_name' id = "+Room_names+" onclick='redirect(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();

function agregarsala(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "se agrego sala"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html"
}
function redirect(name){
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html"
}
function salir(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html"
}