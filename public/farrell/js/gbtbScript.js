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


function bookingPrice() {
    let chosen_ticket;
    let total_price;
    let ticket_type = document.getElementById("book-ticket").value
    let noOfAdults = document.getElementById("book-adults").value
    let noOfChildren = document.getElementById("book-children").value
    var flowerdome = {Name: "Flower Dome", AdultPrice: 11.00, ChildPrice: 7.50}
    var cloudforest = {Name: "Cloud Forest", AdultPrice: 11.00, ChildPrice: 7.50}
    var floralfantasy = {Name: "Floral Fantasy", AdultPrice: 9.00, ChildPrice: 5.50}
    var skyway = {Name: "OCBC Skyway", AdultPrice: 7.00, ChildPrice: 4.50}
    var observatory = {Name: "Supertree Observatory", AdultPrice: 9.50, ChildPrice: 5.50}
    const ticket_array = [flowerdome, cloudforest, floralfantasy, skyway, observatory]
    for (let i = 0; i < ticket_array.length; i++) {
        if (ticket_array[i].Name === ticket_type) {
            chosen_ticket = ticket_array[i]
            break;
        }
    }
    total_price = chosen_ticket.AdultPrice * noOfAdults + chosen_ticket.ChildPrice * noOfChildren
    return total_price
}


function showFinalMessage() {
    let total_price = bookingPrice()
    let name = document.getElementById("customer_name").value
    let email = document.getElementById("customer_email").value
    document.getElementById("submission").innerText = "Thank you for your order, " + name + ". We will send you the ticket codes to your email at " + email
    document.getElementById("price").innerText = "Total Price: " + total_price
}


/*
function clearMessage()
{

}
*/