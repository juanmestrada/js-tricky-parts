function createAccount(pin, amount = 0) {
    return {
        checkBalance(currPin) {
            // given pin does not match 
            if (currPin !== pin) return "Invalid PIN.";

            return `$${amount}`;
        },
        deposit(currPin, newAmount) {
            // given pin does not match 
            if (currPin !== pin) return "Invalid PIN.";

            // update new total amount
            amount += newAmount;

            // confirmation message with updated total amount available
            return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`;
        },
        withdraw(currPin, withdrawalAmount) {
            // given pin does not match 
            if (currPin !== pin) return "Invalid PIN.";

            // amount requested exceed amount available
            if (withdrawalAmount > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            
            // deduct amount requested from total amount available
            amount -= withdrawalAmount;

            // confirmation message with updated total amount available
            return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
        },
        changePin(prevPin, newPin) {
            // given pin does not match 
            if (prevPin !== pin) return "Invalid PIN.";

            // update new pin
            pin = newPin;

            // confirmation message
            return "PIN successfully changed!";
        }
    }
}

module.exports = { createAccount };
