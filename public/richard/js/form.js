const nonPeakPrice = { adult:26, child:19, familyPack:80 }
const peakPrice = { adult:35, child:26, familyPack:112}

function toggleForm(){
    document.body.classList.toggle('activeForm');
    document.getElementById("body").style.overflowY = "auto";
}

function goForm(){
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("overlay-form-richard").style.overflowY = "auto";
    window.scroll({top:0});
}

function displayFinal(){
    const firstName = document.getElementById("firstname").value
    const lastName = document.getElementById("lastname").value
    const email = document.getElementById("email").value
    const date = new Date(document.getElementById("date").value)
    const noAdult = document.getElementById("adultNo").value
    const noDisc = document.getElementById("discNo").value
    const noFamilyPack = document.getElementById("familyNo").value
    const totalNoTicket = parseInt(noAdult) + parseInt(noDisc) + parseInt(noFamilyPack)
    if (date.getDay() == 0 || date.getDay() == 6) {
        const tAdultPrice = peakPrice["adult"] * noAdult
        const tDiscPrice = peakPrice["child"] * noDisc
        const tFamilyPrice = peakPrice["familyPack"] * noFamilyPack
        const totalPrice = tAdultPrice + tDiscPrice + tFamilyPrice
        document.getElementById("finalMessage").innerHTML = "Thank You "+ firstName +" for purchasing " + totalNoTicket + " tickets!" + "<br>" + "Total Amount Charged: "+"$"+totalPrice + "<br>" + "Have A Great Day Ahead!"
    }
    if (date.getDay()> 0 && date.getDay() < 6) {
        const tAdultPrice = nonPeakPrice["adult"] * noAdult
        const tDiscPrice = nonPeakPrice["child"] * noDisc
        const tFamilyPrice = nonPeakPrice["familyPack"] * noFamilyPack
        const totalPrice = tAdultPrice + tDiscPrice + tFamilyPrice
        document.getElementById("finalMessage").innerHTML = "Thank You "+ firstName +" for purchasing " + totalNoTicket + " tickets!" + "<br>" + "Total Amount Charged: "+"$"+totalPrice + "<br>" + "Have A Great Day Ahead!"
    }
}

function resetForm(){
    document.getElementById("finalMessage").innerHTML = ""
}

function setPrice(){
    const chosenDate = new Date(document.getElementById("date").value)
    if (chosenDate.getDay() == 0 || chosenDate.getDay() == 6) {
        document.getElementById("priceAdult").innerHTML = "$"+peakPrice["adult"]
        document.getElementById("priceDisc").innerHTML = "$"+peakPrice["child"]
        document.getElementById("priceFamily").innerHTML = "$"+peakPrice["familyPack"]
    }
    if (chosenDate.getDay()> 0 && chosenDate.getDay() < 6) {
        document.getElementById("priceAdult").innerHTML = "$"+nonPeakPrice["adult"]
        document.getElementById("priceDisc").innerHTML = "$"+nonPeakPrice["child"]
        document.getElementById("priceFamily").innerHTML = "$"+nonPeakPrice["familyPack"]
    }
}

function calcForm(){
    const noAdult = document.getElementById("adultNo").value
    const noDisc = document.getElementById("discNo").value
    const noFamilyPack = document.getElementById("familyNo").value
    const cDate = new Date(document.getElementById("date").value)
    if (cDate.getDay() == 0 || cDate.getDay() == 6) {
        const tAdultPrice = peakPrice["adult"] * noAdult
        const tDiscPrice = peakPrice["child"] * noDisc
        const tFamilyPrice = peakPrice["familyPack"] * noFamilyPack
        const totalPrice = tAdultPrice + tDiscPrice + tFamilyPrice
        document.getElementById("totalPrice").innerHTML = "$"+totalPrice
    }
    if (cDate.getDay()> 0 && cDate.getDay() < 6) {
        const tAdultPrice = nonPeakPrice["adult"] * noAdult
        const tDiscPrice = nonPeakPrice["child"] * noDisc
        const tFamilyPrice = nonPeakPrice["familyPack"] * noFamilyPack
        const totalPrice = tAdultPrice + tDiscPrice + tFamilyPrice
        document.getElementById("totalPrice").innerHTML = "$"+totalPrice
    }
    
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