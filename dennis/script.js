window.onload = function() {
    // Lyssna efter händelser
    var queryResult = document.getElementsByClassName('team-member');
}

    Array.from(queryResult).forEach(function(element) {
    var id = document.getElementById(element.id);
    console.log(id);
    document.getElementById(element.id).addEventListener("mouseover",effectOn(id));
});
var editTitle = function(e) {
    // Ändra "team-title"
};



function effectOn(id){
    document.getElementById(id).style.border = "2px solid black";
    alert(id);
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
}


