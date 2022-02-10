function deposite(input) {
         //deposite input value catch-------
        const inputField = document.getElementById(input);
        const inputvalue = inputField.value;
        // Clear the input field of deposite box----------
        inputField.value = '';
        return inputvalue;
}


        //Deposite button handling with Event=======================
        // ==============================================

document.getElementById('diposite-button').addEventListener('click', function () {   
        const depositeInputValue = deposite('diposite-input');

        //deposite amount catch---------
        const depositeAmount = document.getElementById('diposite-amount');
        const depositeAmountText = depositeAmount.innerText;

         //Adding to input and amount-----
        const depositeAmountTotal = parseFloat(depositeAmountText) + parseFloat(depositeInputValue);
        depositeAmount.innerText = depositeAmountTotal;



        // =====================================



        // Balance Amount catch ------------
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
        
        // Withdraw amount catch--------------------
        const withdrawAmount = document.getElementById('withdraw-amount');
        const withdrawAmountText = withdrawAmount.innerText;

        // Adding Withdraw amount  and withdraw input----------
        const withdrawTotal = parseFloat(withdrawAmountText) + parseFloat(withdrawInputValue);
        withdrawAmount.innerText = withdrawTotal;


        //=====================================================

        
        // Balance Amount catch ------------
        const balanceAmount = document.getElementById('balance-amount');
        const balanceAmountText = balanceAmount.innerText;

        //Withdraw Input and Balnce amount Minus ------------
        const finaleBalance = parseFloat(balanceAmountText) - parseFloat(withdrawInputValue);
        balanceAmount.innerText = finaleBalance;
        

})
