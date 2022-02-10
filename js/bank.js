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




        //Deposite button handling with Event=======================
        // ==============================================

document.getElementById('diposite-button').addEventListener('click', function () {   
        const depositeInputValue = deposite('diposite-input');
        amount('diposite-amount', depositeInputValue)
        
        // // Balance Amount catch ------------
        const balanceAmount = document.getElementById('balance-amount');
        const balanceAmountText = balanceAmount.innerText;
       
        // Adding Balance amount and Deposite input----
        const balanceTotal = parseFloat(depositeInputValue) + parseFloat(balanceAmountText);
        balanceAmount.innerText = balanceTotal;
         
})






        //Deposite button handling with Event=======================
        // ==============================================

document.getElementById('withdraw-button').addEventListener('click', function () {
        const withdrawInputValue = deposite('withdraw-input')
        amount('withdraw-amount', withdrawInputValue)

        // Balance Amount catch ------------
        const balanceAmount = document.getElementById('balance-amount');
        const balanceAmountText = balanceAmount.innerText;

        //Withdraw Input and Balnce amount Minus ------------
        const finaleBalance = parseFloat(balanceAmountText) - parseFloat(withdrawInputValue);
        balanceAmount.innerText = finaleBalance;
        

})
