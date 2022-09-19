const userLoan = document.getElementById("userLoan");
const btnLoan = document.getElementById("btnLoan");
const userRepayLoan = document.getElementById("userRepayLoan");
const btnRepayLoan = document.getElementById("btnRepayLoan");
const acctBalanceLbl = document.getElementById("acctBalanceLbl");

const userBank = document.getElementById("userBank");
const btnBank = document.getElementById("btnBank");
const userWork = document.getElementById("userWork");
const btnWork= document.getElementById("btnWork");
const workBalanceLbl = document.getElementById("workBalanceLbl");


let loans = [];
let repayLoans = [];
let totalBalance = 25;

let works = 100
let banks= []
let payBalance = 20;

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  });

// accept deposits from user, store deposits in array
btnLoan.addEventListener('click', () => {

    // checks if deposit is a number
    if (isNaN(userLoan.value)) {
        alert("Please enter a number.");
        return userLoan.value = '';
    } else {

    // checks if deposit meets parameters
        if (userLoan.value < 0.01 || userLoan.value > 10000) {
            alert("You can only deposit between €0.01 and €10,000.")
            return userLoan.value = '';
        } else {
    
        // push deposit to array
        loans.push(Number(userLoan.value));
        // calculate Total Balance
        totalBalance += (Number(userLoan.value));

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerText = totalBalanceFormatted;


    // print deposit to console to verify success
    console.log("€" + userLoan.value);
    return userLoan.value = '';
    }
}
    
});




// format TotalBalance to show $ XX.XX (2 decimal places)

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;



// accept deposits from user, store deposits in array
btnWork.addEventListener('click', () => {
    works.push(Number(userWork.value))
    payBalance += (Number(works.value));

    // format TotalBalance to show $ XX.XX (2 decimal places)
    let totalBalanceFormatted = formatter.format(totalBalance);
    document.getElementById("acctBalanceLbl").innerText = totalBalanceFormatted;


// print deposit to console to verify success
console.log("€" + userWork.value);
return userLoan.value = '';
}

// format TotalBalance to show $ XX.XX (2 decimal places)
let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerText = totalBalanceFormatted;






btnRepayLoan.addEventListener('click', () => {

    // checks if withdrawal is a number
    if (isNaN(userRepayLoan.value)) {
        alert("Please enter a number.");
        return userRepayLoan.value = '';
    } else {
  
        // checks if withdrawal meets parameters
        if (userRepayLoan.value > totalBalance - 5) {
            alert("Your total balance cannot drop below $5.");
            return userRepayLoan.value = '';
        } else {
  
        // push withdrawal to array
        repayLoans.push(Number(userRepayLoan.value));
        // calculate Total Balance
        totalBalance -= (Number(userRepayLoan.value));
  
        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
  
    // print withdrawal to console to verfify success
    console.log("$" + userRepayLoan.value);
    return userWithdraw.value = '';
    }
  }
  });