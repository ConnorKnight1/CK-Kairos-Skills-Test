/* Vending Machine - Skills Test - Connor Knight */


var change = 0;
var moneyInserted = 0;
var totalPaid = 0;

/* array of drinks along with price. */

var drinks = ["Coke", "Tango", "Water"];
const pricecoke = 55;
const pricetango = 35;
const pricewater = 45;

/* default message text (nothing) and where to put new value based of change  */

var msg = "";
var messageEl = document.getElementById("message");



/* value of each money */

const money_one = 1;
const money_five = 5;
const money_ten = 10;
const money_twenty = 20;
const money_fifty = 50;

/* function getTotal to get the value of the money and calculate the total value */

function getTotal() {

    /*  gets the value of the coins   */


    var money_ones = Number(document.getElementById("ones").value);
    var money_fives = Number(document.getElementById("fives").value);
    var money_tens = Number(document.getElementById("tens").value);
    var money_twenties = Number(document.getElementById("twenties").value);
    var money_fifties = Number(document.getElementById("fifties").value);

    /* calculates the toal of each coin entered e.g. 2 one coins entered = 1 * 2 = */

    if (money_ones > 0) {
        money_ones = money_ones * money_one;
    }

    if (money_fives > 0) {
        money_fives = money_fives * money_five;
    }

    if (money_tens > 0) {
        money_tens = money_tens * money_ten;
    }

    if (money_twenties > 0) {
        money_twenties = money_twenties * money_twenty;
    }

    if (money_fifties > 0) {
        money_fifties = money_fifties * money_fifty;
    }

    /* total paid caluclated the value of all coins and returns the value. */

    totalPaid = 
        money_ones + 
        money_fives + 
        money_tens +
        money_twenties + 
        money_fifties;

        return totalPaid; /* to fixed adds two decimal points. */

}

/* function tally creates a live show of amount of money that has been entered. */

function tally() {

    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}

/* clears the live tally */

function clearTally() {

    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}

/* sets amount of coins entered to 0 for each element*/

function clearForm() {

    document.getElementById("ones").value = ""
    document.getElementById("fives").value = ""
    document.getElementById("tens").value = ""
    document.getElementById("twenties").value = ""
    document.getElementById("fifties").value = ""
}

/* creates a change of message depending on amount of money that has been inserted. Gives Change Back. */

function cancel() {

    getTotal();

    if(totalPaid > 0) {
        msg = 
            "Transaction cancelled. " + totalPaid + " has been returned.";
       
            clearForm();
            clearTally();

            messageEl.innerHTML = msg;

    } else if (totalPaid == 0 ) {
        msg = "";

        messageEl.innerHTML = msg;

    }
}

/* calculate change first to give determind what the message is. Rejected or Accepted. */

function calculateChange() {

    var tempChange = 0;

    if(getTotal() != 0) {
        return (tempChange = (getTotal() - pricecoke)) 

    }

    return tempChange;

}

/* coke  dispense. Looks at the current total paid and makes decisions based on that informaton */

function dispenseCoke(drink) {
    messageEl.innerHTML = "";
    change = 0;

    var selectedDrink = drinks[drink];

    change = calculateChange();

    /* if you didn't pay enough it returns money */

    if (change < 0) {
        msg = "You did not pay enough " + totalPaid + " has been returned to the coin return"
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if (change > 0) {  /* if more is entered drink is dispences and change is given. */
        msg = selectedDrink + " has been dispenced. " + change + " has been returned to the coin return.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if (totalPaid == 0) { /* if no money is entered before clicking drink it tells user to input money. */
        msg = "Please pay before selecting a drink. "
        messageEl.innerHTML = msg;

    } else if (change == 0) { /* if exact amount of money is entered, no change is given and drink dispenced.*/
        msg = selectedDrink + " has been dispenced.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    }

}

/* tango dispense */

function calculateChangetango() {

    var tempChange = 0;

    if(getTotal() != 0) {
        return (tempChange = (getTotal() - pricetango))

    }

    return tempChange;

}



function dispenseTango(drink) {
    messageEl.innerHTML = "";
    change = 0;

    var selectedDrink = drinks[drink];

    change = calculateChangetango();

    /* if you didn't pay enough money is returned*/

    if (change < 0) {
        msg = "You did not pay enough " + totalPaid + " has been returned to the coin return"
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if (change > 0) {  /* if more is entered drink is dispences and change is given. */
        msg = selectedDrink + " has been dispenced." + change + " has been returned to the coin return.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if (totalPaid == 0) { /* if no money is entered before clicking drink it tells user to input money. */
        msg = "Please pay before selecting a drink. "
        messageEl.innerHTML = msg;

    } else if (change == 0) { /* if exact amount of money is entered, no change is given and drink dispenced.*/
        msg = selectedDrink + " has been dispenced.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    }

}

/* water dispense */

function calculateChangeWater() {

    var tempChange = 0;

    if(getTotal() != 0) {
        return (tempChange = (getTotal() - pricewater))

    }

    return tempChange;

}

function dispenseWater(drink) {
    messageEl.innerHTML = "";
    change = 0;

    var selectedDrink = drinks[drink];

    change = calculateChangeWater();

    /* if you didn't pay enough it returns money*/

    if (change < 0) {
        msg = "You did not pay enough " + totalPaid + " has been returned to the coin return"
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if (change > 0) {  /* if more is entered drink is dispences and change is given. */
        msg = selectedDrink + " has been dispenced. " + change + " has been returned to the coin return.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if (totalPaid == 0) { /* if no money is entered before clicking drink it tells user to input money. */
        msg = "Please pay before selecting a drink. "
        messageEl.innerHTML = msg;

    } else if (change == 0) { /* if exact amount of money is entered, no change is given and drink dispenced.*/
        msg = selectedDrink + " has been dispenced.";

        totalPaid = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    }

}