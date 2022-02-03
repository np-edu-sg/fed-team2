// JavaScript source code

var today = new Date();
var dd = today.getDate() + 1;
var mm = today.getMonth() + 1; //January is 0
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

tomorrow = yyyy + '-' + mm + '-' + dd;
nextYear = (yyyy + 1) + '-' + mm + '-' + dd;
document.getElementById("startDate").setAttribute("min", tomorrow);
document.getElementById("startDate").setAttribute("max", nextYear);

//function getEndDate() { /*doesnt work needs fixing*/
//    var startDate = new Date(document.getElementById("startDate").value);
//    console.log(startDate);
//    var minEndDay = startDate.getDate() + 1;
//    var maxEndDay = startDate.getDate() + 8;
//    var endMonth = startDate.getMonth();
//    var endYear = startDate.getFullYear();

//    minEndDate = endYear + '-' + endMonth + '-' + minEndDay;
//    maxEndDate = endYear + '-' + endMonth + '-' + maxEndDay;

//    console.log(minEndDate, maxEndDate);

//    document.getElementById("endDate").setAttribute("min", minEndDate);
//    document.getElementById("endDate").setAttribute("max", maxEndDate);

//    console.log(document.getElementById("endDate").getAttribute("min"));
//    console.log(document.getElementById("endDate").getAttribute("max"));
//}


var typePrices = new Array();
typePrices['Deluxe'] = 400;
typePrices['Premier'] = 450;

var viewPrices = new Array();
viewPrices["Lower"] = 0;
viewPrices["City"] = 0;
viewPrices["Garden"] = 30;
viewPrices["Harbour"] = 30;

var bedPrices = new Array();
bedPrices["Single"] = 30;
bedPrices["Twin"] = 55;
bedPrices["Double"] = 55;
bedPrices["Queen"] = 70;
bedPrices["King"] = 85;

function getDetails() {
    var roomType = document.getElementById("roomType").value;
    var roomView = document.getElementById("roomView").value;
    var roomBed = document.getElementById("roomBed").value;
    var nights = document.getElementById("nights").value;
    var price = 0;

    price += typePrices[roomType];
    price += viewPrices[roomView];
    price += bedPrices[roomBed];
    price *= nights;

    document.getElementById("typeDetails").innerHTML = "Room Type: " + roomType;
    document.getElementById("viewDetails").innerHTML = "Room View: " + roomView;
    document.getElementById("priceDetails").innerHTML = "Price: $" + price;

}

function displayDate() {

    var nights = document.getElementById("nights").value;
    var bookDate = new Date(document.getElementById("startDate").value);
    var bookDay = bookDate.getDate();
    var endDay = bookDate.getDate() + parseInt(nights);
    var bookMonth = bookDate.getMonth();
    var bookYear = bookDate.getFullYear();
    console.log(bookDay, endDay);
    confirmBookDate = bookYear + '-' + bookMonth + '-' + bookDay;
    endBookDate = bookYear + '-' + bookMonth + '-' + endDay;

    document.getElementById("dateDetails").innerHTML = "Your stay will be from " + confirmBookDate + " to " + endBookDate;

}
function submitForm() {

    var custName = document.getElementById("name").value;
    document.getElementById("customerDetails").innerHTML = "Booking successful. Thank you for your booking, Mr/Mrs. " + custName + ".";

    
}



