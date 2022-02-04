function option(){
    //TEMPORARY IMAGE
    var pic = "images/ticket1.png";
    var eventName = document.getElementById("choose-event").value;
    var ticketType = document.getElementsByName("ticket-type");
    var ticketQuantity = document.getElementsByName("quantity");
    let price;
    let quantity;
    let selected_ticket;
    for (let i = 0; i < ticketType.length; i++) {
        if (ticketType[i].checked) {
            selected_ticket = ticketType[i].value;
        }
    }
    if (eventName==="Future World") {
        if (selected_ticket === "Adult"){
            price = 16;
        }
        if (selected_ticket === "Concession"){
            price = 16;
        }
        if (selected_ticket === "Family"){
            price = 16;
        }
        if (selected_ticket === "Sands Rewards Member (Adult)"){
            price = 16;
        }
        if (selected_ticket === "Sands Rewards Member (Concession)"){
            price = 16;
        }
    }
    if (eventName==="Radical Curiosity") {
        if (selected_ticket === "Adult"){
            price = 16;
        }
        if (selected_ticket === "Concession"){
            price = 16;
        }
        if (selected_ticket === "Family"){
            price = 16;
        }
        if (selected_ticket === "Sands Rewards Member (Adult)"){
            price = 16;
        }
        if (selected_ticket === "Sands Rewards Member (Concession)"){
            price = 16;
        }
    }
    if (eventName==="Hope From Chaos") {
        if (selected_ticket === "Adult"){
            price = 6;
        }
        if (selected_ticket === "Concession"){
            price = 16;
        }
        if (selected_ticket === "Family"){
            price = 16;
        }
        if (selected_ticket === "Sands Rewards Member (Adult)"){
            price = "Please choose a valid category";
        }
        if (selected_ticket === "Sands Rewards Member (Concession)"){
            price = "Please choose a valid category";
        }
        
    }
    if (eventName==="Attack On Titans") {
        if (selected_ticket === "Adult"){
            price = 16;
        }
        if (selected_ticket === "Concession"){
            price = 16;
        }
        if (selected_ticket === "Family"){
            price = 16;
        }
        if (selected_ticket === "Sands Rewards Member (Adult)"){
            price = 16;
        }
        if (selected_ticket === "Sands Rewards Member (Concession)"){
            price = 16;
        }
        
    }
    
    for (let i = 0; i < ticketQuantity.length; i++)
    {
        quantity = ticketQuantity[i].value;
    }
    if (price === "Please choose a valid category"){
        document.getElementById('number-of-tickets').innerHTML = "Please choose a valid category"
    }
    else {
        let total = quantity * price;
        document.getElementById('number-of-tickets').innerHTML = quantity + " " + selected_ticket + " at $" + total;
    }
    
    document.getElementById('event-name').innerHTML = eventName;
    if (selected_ticket === undefined){
        
    }
    else {
        document.getElementById('ticket-display').style.display='block';
        document.getElementById('ticket-pic').src = pic.replace('90x90', '225x225');
    }    
}