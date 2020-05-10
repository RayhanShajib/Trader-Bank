//Login Button Event 
const loginBtn = document.querySelector('#login');
loginBtn.addEventListener('click',()=>{
    const loginArea = document.querySelector('#login-area');
    loginArea.style.display = 'none';
    const trxArea = document.querySelector('#transection-area');
    trxArea.style.display = 'block';
});
//Deposite Button Event
const depositBtn = document.querySelector('#depositBtn');
depositBtn.addEventListener('click',()=>{
    const depositNumber = getInputNumber('#depositAmount');    
    
    updateSpanText('#currentDeposite', depositNumber);
    updateSpanText('#currentBalance', depositNumber);

    makeEmpty('#depositAmount');
});
//withdrow Button Event
const withdrawBtn = document.querySelector('#withdrawBtn');
withdrawBtn.addEventListener('click',()=>{
    const withdrawNumber =getInputNumber('#withdrawAmount');

    updateSpanText('#currentWithdraw', withdrawNumber);
    updateSpanText('#currentBalance',-1 * withdrawNumber);

    makeEmpty('#withdrawAmount')
});
// Get Input Number function
function getInputNumber(id) {
    const amount = document.querySelector(id).value;
    const number = parseFloat(amount);
    return number;
    
};
//Calculator function
function updateSpanText(id, amount) {
   const currentAmount = document.querySelector(id).innerText;
   const currentAmountNumber = parseFloat(currentAmount);
   const totalAmount =  currentAmountNumber + amount;
   document.querySelector(id).innerText = totalAmount;
};
//Make empty function
function makeEmpty(id){
    document.querySelector(id).value ="";

};