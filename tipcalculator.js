// Calculate Tip

function calculateTip() {
    var billAmt = document.getElementById("billAmt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleAmt").value;

    // Validate Input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please Enter Values");
        return;
    }

    //Checking to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display ="none";
    } else {
        document.getElementById("each").style.display ="block";
    }

    //Calculating Tip
    var total = (billAmt * serviceQual) / numOfPeople;
    //Round to two decimal places
    total = Math.round(total * 100) / 100;
    //Next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
};