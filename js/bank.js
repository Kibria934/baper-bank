function deposite(input) {
         //deposite input value catch-------
        const inputField = document.getElementById(input);
        const inputvalue = inputField.value;
        // Clear the input field of deposite box----------
        inputField.value = '';
        return inputvalue;
}
function amount(amount$,firstFunctionValue) {
        // //deposite amount catch---------
        const amountTotal = document.getElementById(amount$);
        const amountTotalText = amountTotal.innerText;
        //  //Adding to input and amount-----
        const sumAmount = parseFloat(amountTotalText) + parseFloat(firstFunctionValue);
        amountTotal.innerText = sumAmount;
}


function balanceUpdate(input2,isAdd) {
        // // Balance Amount catch ------------
        const balanceAmount = document.getElementById('balance-amount');
        const balanceAmountText = balanceAmount.innerText;

         if (isAdd == true) {
        // Adding Balance amount and Deposite input----
        const balanceTotal = parseFloat(input2) + parseFloat(balanceAmountText);
        balanceAmount.innerText = balanceTotal;
         }
        
        else {
        // Adding Balance amount and Deposite input----
        const balanceTotal = parseFloat(balanceAmountText) -parseFloat(input2);
        balanceAmount.innerText = balanceTotal;
        }
}
function lastFunc() {
        const balanceAmount = document.getElementById('balance-amount');
        const balanceAmountText = balanceAmount.innerText;
        return balanceAmountText;
}

        //Deposite button handling with Event// 
document.getElementById('diposite-button').addEventListener('click', function () {   
        const depositeInputValue = deposite('diposite-input'); //function-1
       // Error handaling
        if (depositeInputValue > 0) {      
        amount('diposite-amount', depositeInputValue) // function -2
        balanceUpdate(depositeInputValue,true) // function -3         
        }
})

        // Withdraw button handling with Event//
document.getElementById('withdraw-button').addEventListener('click', function () {
        const withdrawInputValue = deposite('withdraw-input')

        //Error handaling
        if (withdrawInputValue > 0 && lastFunc() >= withdrawInputValue) {
        amount('withdraw-amount', withdrawInputValue)
        balanceUpdate(withdrawInputValue,false)      
        }

})
