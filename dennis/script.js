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
            editTitle(this);
        });
    }
}

function editTitle(elm) {
    let title = document.getElementById(elm.id).parentElement.lastElementChild;
    let newtitle = document.createElement("input");
    newtitle.type = "text";
    newtitle.placeholder = title.innerHTML;
    newtitle.addEventListener("change", function(){
        title.innerHTML = newtitle.value;
        newtitle.remove();
    });
    elm.parentElement.appendChild(newtitle);
    //title.remove();
}



function effectOn(id){  
    document.getElementById(id).parentElement.classList.add("selected");
}

function effectOff(id){
    document.getElementById(id).parentElement.classList.remove("selected");
}
