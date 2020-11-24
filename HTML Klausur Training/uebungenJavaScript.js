function welcome(){
    alert("Hallo Welt");
    document.getElementById("jsInhalt").innerHTML="Hallo Welt22222";
}

function frageName(){
    var username=prompt("Wie heißt du?");
    document.getElementById("jsInhalt2").innerText="Hallo " + username;
}