window.onload = function() {
    // Lyssna efter händelser
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


var editTitle = function(e) {
    
};



function effectOn(id){  
    document.getElementById(id).parentElement.classList.add("selected");
}

function effectOff(id){
    document.getElementById(id).parentElement.classList.remove("selected");
}


