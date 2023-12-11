/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let numDaysSelected = new Set();
let fullOrHalf = 'full';
let daySelectorElements = document.querySelectorAll('.day-selector li');
let fullDayElement = document.getElementById('full');
let halfDayElement = document.getElementById('half');
let calculatedCostElement = document.getElementById('calculated-cost');
let clearButtonElement = document.getElementById('clear-button');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

daySelectorElements.forEach(function(element) {
    element.addEventListener('click', function() {
        element.classList.toggle('clicked');
        if (element.classList.contains('clicked')) {
            numDaysSelected.add(element.id);
        } else {
            numDaysSelected.delete(element.id);
        }
        calculateCost();
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButtonElement.addEventListener('click', function() {
    daySelectorElements.forEach(function(element) {
        element.classList.remove('clicked');
    });
    numDaysSelected.clear();
    calculateCost();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayElement.addEventListener('click', function() {
    fullOrHalf = 'half';
    costPerDay = 20;
    this.classList.add('clicked');
    fullDayElement.classList.remove('clicked');
    calculateCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayElement.addEventListener('click', function() {
    fullOrHalf = 'full';
    costPerDay = 35;
    this.classList.add('clicked');
    halfDayElement.classList.remove('clicked');
    calculateCost();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    let totalCost = numDaysSelected.size * costPerDay;
    calculatedCostElement.textContent = totalCost;
}
