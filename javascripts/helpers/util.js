import breads from '../component/bread.js'
import condiment from '../component/condiments.js'
import cheese from '../component/cheese.js'
import meats from '../component/meat.js'
import veggie from '../component/veggies.js'


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const allBread = breads.getBread();
const allMeat = meats.getMeat();
const allCondiments = condiment.getCondiments();
const cheeses = cheese.getCheese();
const allVeggies = veggie.getVeggies();

const allItems = Object.assign(allMeat, allCondiments, cheeses, allVeggies, allBread);


let checkoutSelection = [];

const selectionEvents = (e) => {
    // e.preventDefault();
    const currentId = e.target.id;
    const currentItem = document.getElementById(currentId);
    if (currentItem.checked) {
        if (checkoutSelection.includes(currentId)) {

        } else {
            checkoutSelection.push(currentId);
        }
    } else if (!currentItem.checked) {
        if (checkoutSelection.includes(currentId)) {
            document.getElementById('printSandwich').innerHTML = '';
            checkoutSelection = checkoutSelection.filter(i => i !== currentId);
        };
    }
    domBuilder(checkoutSelection);
    
 
        
};



const eventL = (e) => {
    //const targetId = e.target.id
    const currentButton = document.getElementsByClassName('order');

    for (let i = 0; i < currentButton.length; i++) {
        currentButton[i].addEventListener('click', selectionEvents);
    };
};



const domBuilder = (array) => {
    let domString = '';
    let top = 0;
    array.forEach((item) => {
        domString += `<p>${item} $${allItems[item]} </p>`;
        top += allItems[item];
        printToDom('printSandwich', domString);
        printToDom('total', `<h4>Total: $${top}</h4>`);
    });

};


export default { eventL };