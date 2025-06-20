let amountToSend= prompt("How much money are you sending? (KES):") // variable used to prompt the user to input a value

amountToSend=Number(amountToSend);// conversion of strings to numbers

function estimateTransactionFee (amountToSend){
    
    let transFee =0.015*amountToSend;
    if (transFee <10){
        transFee =10;
    }
    else if(transFee >70){
        transFee =70;
    }

    let totalPayment = amountToSend + transactionFee;
    console.log("Sending KES "+amountToSend+":");
    console.log("Calculated Transaction Fee: KES "+transFee);
    console.log("Total amount to be debited: KES "+totalPayment);
    console.log("Send your Money Securely!");
//prints on the console
} 
estimateTransactionFee(amountToSend);
//this is done to show the closure of the declared function
