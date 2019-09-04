window.onload = function() {
    // Lyssna efter händelser
    var queryResult = document.getElementsByClassName('team-member');
    let profiles = document.getElementsByClassName("profile");

    for(var i = 0; i < profiles.length; ++i){
        profiles[i].addEventListener("mouseover",function(){
            effectOn(this.id);
        });
        profiles[i].addEventListener("mouseleave",function(){
            effectOff(this.id);
        });
        profiles[i].addEventListener("click",function(){
            editTitle(this.id);
        });
    }
}

    Array.from(queryResult).forEach(function(element) {
    var id = document.getElementById(element.id);
    console.log(id);
    document.getElementById(element.id).addEventListener("mouseover",effectOn(id));
});
var editTitle = function(e) {
    
};



function effectOn(id){
    document.getElementById(id).style.border = "2px solid black";
    alert(id);
    document.getElementById(id).parentElement.classList.add("selected");
}

function effectOff(id){
    document.getElementById(id).parentElement.classList.remove("selected");
}


