//Function to limit the booking date to be within one month of the current date



window.onload = function () {
    let currentdate = new Date();
    let futuredate = new Date();
    let fMonth = futuredate.getMonth() + 1;
    futuredate.setMonth(fMonth)

    var input = document.getElementById("book-date");
    currentdate = currentdate.toISOString().slice(0, 10);
    futuredate = futuredate.toISOString().slice(0, 10);
    input.setAttribute("placeholder", currentdate);
    input.setAttribute("min", currentdate);
    input.setAttribute("max", futuredate);
}

function showFinalMessage() {
    let name = document.getElementById("customer_name").value
    let email = document.getElementById("customer_email").value
    document.getElementById("submission").innerText = "Thank you for your order, " + name + ". We will send you the ticket codes to your email at " + email
}




/*
function clearMessage()
{

}
*/