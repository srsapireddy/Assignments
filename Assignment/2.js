function calculateCalls(noOfCalls) {
    if(noOfCalls<50) {
        return noOfCalls * .50
    }
    if(noOfCalls>= 50 &&noOfCalls<=150) {
        return 50*.5 + ((noOfCalls-50)* 0.7)
    }
    if(noOfCalls> 150 && noOfCalls<=300) {
        return (50*.5) + (100* 0.7) + (.85 *(noOfCalls-150) )
    }
    if(noOfCalls>300) {
        return (50*.5) + (100* 0.7) + (.85 * 150 ) + (0.95 * (noOfCalls-300))
    }
}

function calculateSMS(noOfCalls) {
    if(noOfCalls<50) {
        return noOfCalls * 0
    }
    if(noOfCalls>= 50 &&noOfCalls<=200) {
        return   (noOfCalls-50)* 0.25
    }
    if(noOfCalls> 200 && noOfCalls<=400) {
        return  (150*0.25) + ((noOfCalls-200)*0.4)
    }
    if(noOfCalls>400) {
        return    (150*0.25) + (200*0.4) + ((noOfCalls-400)*0.45)
    }
}

function total(){

    var er = "";

    var noOfCalls = document.getElementById("calls").value;
    noOfCalls = parseFloat(noOfCalls);
    if(isNaN(noOfCalls)){
        er = "First number is invalid\n";
    }

    var noOfSMS = document.getElementById("sms").value;
    noOfSMS =parseFloat(noOfSMS);
    if(isNaN(noOfSMS)){
        er = er + "Second number is invalid";
    }

   let priceForCalls = this.calculateCalls(noOfCalls)
   let priceForSMS = this.calculateSMS(noOfSMS)

    let totalPrice = priceForCalls + priceForSMS;

    alert("Charges for call: " + priceForCalls +"/-" +"\nCharges for call: " + priceForSMS +"/-" + "\nTotal Charges: " + totalPrice +"/-");
}
