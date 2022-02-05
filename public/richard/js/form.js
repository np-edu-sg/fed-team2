function toggleForm(){
    document.body.classList.toggle('activeForm');
    document.getElementById("body").style.overflowY = "auto";
}

function goForm(){
    document.getElementById("body").style.overflowY = "hidden";
    window.scroll({top:0});
}

function displayFinal(){
    const firstName = document.getElementById("firstname").value
    const lastName = document.getElementById("lastname").value
    const email = document.getElementById("email").value
    const date = document.getElementById("date").value
    document.getElementById("finalMessage").innerHTML = "LOL " + firstName
}

function resetForm(){
    document.getElementById("finalMessage").innerHTML = ""
}

window.onload = function () {
    const tDay = new Date(Date.now())
    tDay.setDate(tDay.getDate() + 1)
    const rDay = new Date()
    rDay.setMonth(rDay.getMonth() + 1)
    const dateElement = document.getElementById("date")
    dateElement.setAttribute("min", tDay.toISOString().split("T")[0])
    dateElement.setAttribute("max", rDay.toISOString().split("T")[0])
}