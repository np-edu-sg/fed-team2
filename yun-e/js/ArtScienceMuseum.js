function option() {
    //TEMPORARY IMAGE
    var pic = "images/ticket2.png";
    var eventName = document.getElementById("choose-event").value;
    var ticketType = document.getElementsByName("ticket-type");
    var ticketQuantity = document.getElementsByName("quantity");
    const date = document.getElementById("ticket-date").value;
    let price;
    let quantity;
    let selected_ticket;
    for (let i = 0; i < ticketType.length; i++) {
        if (ticketType[i].checked) {
            selected_ticket = ticketType[i].value;
        }
    }
    if (eventName === "Future World") {
        if (selected_ticket === "Adult") {
            price = 16;
        }
        if (selected_ticket === "Concession") {
            price = 12;
        }
        if (selected_ticket === "Family") {
            price = 45;
        }
        if (selected_ticket === "Sands Rewards Member (Adult)") {
            price = 13.3;
        }
        if (selected_ticket === "Sands Rewards Member (Concession)") {
            price = 9.8;
        }
    }
    if (eventName === "Radical Curiosity") {
        if (selected_ticket === "Adult") {
            price = 16;
        }
        if (selected_ticket === "Concession") {
            price = 12;
        }
        if (selected_ticket === "Family") {
            price = 45;
        }
        if (selected_ticket === "Sands Rewards Member (Adult)") {
            price = 13.3;
        }
        if (selected_ticket === "Sands Rewards Member (Concession)") {
            price = 9.8;
        }
    }
    if (eventName === "Hope From Chaos") {
        if (selected_ticket === "Adult") {
            price = 6;
        }
        if (selected_ticket === "Concession") {
            price = 6;
        }
        if (selected_ticket === "Family") {
            price = 18;
        }
        if (selected_ticket === "Sands Rewards Member (Adult)") {
            price = "Please choose a valid category";
        }
        if (selected_ticket === "Sands Rewards Member (Concession)") {
            price = "Please choose a valid category";
        }

    }
    if (eventName === "Attack On Titans") {
        if (selected_ticket === "Adult") {
            price = 18;
        }
        if (selected_ticket === "Concession") {
            price = 14;
        }
        if (selected_ticket === "Family") {
            price = 50;
        }
        if (selected_ticket === "Sands Rewards Member (Adult)") {
            price = 14.7;
        }
        if (selected_ticket === "Sands Rewards Member (Concession)") {
            price = 11.2;
        }

    }

    for (let i = 0; i < ticketQuantity.length; i++) {
        quantity = ticketQuantity[i].value;
    }
    if (price === "Please choose a valid category") {
        document.getElementById('number-of-tickets').innerHTML = price;
    } else {
        let total = quantity * price;
        document.getElementById('number-of-tickets').innerHTML = quantity + " " + selected_ticket + " at $" + total.toFixed(2);
    }

    document.getElementById('event-name').innerHTML = eventName;
    if (selected_ticket === undefined) {

    } else {
        document.getElementById('ticket-display').style.display = 'block';
        document.getElementById('footer').style.position = 'relative';
        document.getElementById('return-page').style.backgroundColor = '#7eaaaa';
        document.getElementById('return-page').style.color = '#3a6d6c';
        document.getElementById('ticket-pic').src = pic.replace('90x90', '225x225');
        document.getElementById("event-date").innerHTML = "Scheduled for " + date.toString();
    }
}

function showFinalMessage() {
    let name = document.getElementById("Name").value;
    console.log(name);
    document.getElementById("finalmsg").innerText = "Thank you for your order, " + name + "!";
}

window.onload = function () {
    let tD = new Date();
    var today = tD.getFullYear() + "-" + (tD.getMonth() + 1) + "-" + tD.getDate();
    document.getElementById("ticket-date").setAttribute("min", today);
    var nD = new Date();
    nD.setDate(nD.getDate() + 30);
    var newdate = nD.getFullYear() + "-" + (nD.getMonth() + 1) + "-" + nD.getDate();
    document.getElementById("ticket-date").setAttribute("max", nD.toISOString().split("T")[0]);
}