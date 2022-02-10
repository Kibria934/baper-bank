function deposite() {
         //deposite input value catch-------
        const depositeInput = document.getElementById('diposite-input');
        const depositeInputValue = depositeInput.value;
        // Clear the input field of deposite box----------
        depositeInput.value = '';
        return depositeInputValue;
}
        //Deposite button handling with Event=======================
        // ==============================================
document.getElementById('diposite-button').addEventListener('click', function () {

        // //deposite input value catch-------
        // const depositeInput = document.getElementById('diposite-input');
        // const depositeInputValue = depositeInput.value;
        const depositeInputValue = deposite();

        // // Eror handaling -------------
        // if (depositeInput.value == '') {
        //         alert('Please ente number')
        //         depositeAmount.innerText = depositeAmount.innerText;
        // }

        //deposite amount catch---------
        const depositeAmount = document.getElementById('diposite-amount');
        const depositeAmountText = depositeAmount.innerText;

         //Adding to input and amount-----
        const depositeAmountTotal = parseFloat(depositeAmountText) + parseFloat(depositeInputValue);
        depositeAmount.innerText = depositeAmountTotal;
        
        // // Clear the input field of deposite box----------
        // depositeInput.value = '';

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
        
        // Withdraw input value catch ------------------
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawInputValue = withdrawInput.value;

        if (withdrawInput.value =='') {
                alert('Please enter number')
                withdrawAmount.innerText = withdrawAmount.innerText;
        }
        // Withdraw amount catch--------------------
        const withdrawAmount = document.getElementById('withdraw-amount');
        const withdrawAmountText = withdrawAmount.innerText;


        // Adding Withdraw amount  and withdraw input----------
        const withdrawTotal = parseFloat(withdrawAmountText) + parseFloat(withdrawInputValue);
        withdrawAmount.innerText = withdrawTotal;


        // Clear withdraw input--------------------
        withdrawInput.value = '';

        //=====================================================

        // Balance Amount catch ------------
        const balanceAmount = document.getElementById('balance-amount');
        const balanceAmountText = balanceAmount.innerText;

        //Withdraw Input and Balnce amount Minus ------------
        const finaleBalance = parseFloat(balanceAmountText) - parseFloat(withdrawInputValue);
        balanceAmount.innerText = finaleBalance;
        

})
