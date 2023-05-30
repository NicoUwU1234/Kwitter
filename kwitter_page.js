//TUS ANLACES DE FIREBASE
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
room_name = localStorage.getItem("room_name");

function enviar(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            mensaje:msg,
            like:0

      });
 
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
console.log(firebase_message_id);
message_id = firebase_message_id;
console.log(message_data);
name = message_data ['name'];
mensaje = message_data ['mensaje'];
like = message_data ['like'];
name_with_tag = "<h4> "+ name + "<img class = 'user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ mensaje +"</h4>"
like_button = "<button class= 'btn btn-warning' id="+firebase_message_id+" value="+like+" onclick= 'updatelike(message_id)'>";
span_with_tag = "<span class= 'glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML = row;
//Termina código
      } });  }); }
getData();
 function updatelike(message_id){
console.log("Boton me gusta "+ message_id);
buton_id = message_id;
likes = document.getElementById(buton_id).value;
update_likes = Number(likes) + 1;
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:update_likes
});
 }
 function salir(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html"
}