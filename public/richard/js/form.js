function toggleForm(){
    document.body.classList.toggle('activeForm');
    document.getElementById("body").style.overflowY = "auto";
}

function goForm(){
    document.getElementById("body").style.overflowY = "hidden";
    window.scroll({top:0});
}