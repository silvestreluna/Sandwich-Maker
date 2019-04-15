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


// let selectedBread = [];
// let selectedMeat = [];
// let selectedCondiment = [];
// let selectedCheese = [];
// let selectedVeggies = [];
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




// const selectionEvents = (e) => {
//    // e.preventDefault();
//    const currentId = e.target.id;
//    const currentItem = document.getElementById(currentId);
//    if(currentItem.checked) {
//        if(selectedBread.includes(currentId)) {

//        } else {
//            selectedBread.push(currentId);

//        }
//    } else if (!currentItem.checked) {
//        if(selectedBread.includes(currentId)) {
//            document.getElementById('printSandwich').innerHTML = '';
//         selectedBread = selectedBread.filter(bread => bread !== currentId);
//    };
//     } 
//     domBuilder(selectedBread);
//     console.log(selectedBread);
// };


// const selectionEvents2 = (e) => {
//     // e.preventDefault();
//     const currentId = e.target.id;
//     const currentItem = document.getElementById(currentId);
//     if(currentItem.checked) {
//         if(selectedMeat.includes(currentId)) {

//         } else {
//             selectedMeat.push(currentId);

//         }
//     } else if (!currentItem.checked) {
//         if(selectedMeat.includes(currentId)) {
//            document.getElementById('printMeat').innerHTML = '';
//             selectedMeat = selectedMeat.filter(meat => meat !== currentId);
//     } 
//      };
//      domBuilder2(selectedMeat);
//  };

//  const selectionEvents3 = (e) => {
//     // e.preventDefault();
//     const currentId = e.target.id;
//     const currentItem = document.getElementById(currentId);
//     if(currentItem.checked) {
//         if(selectedCondiment.includes(currentId)) {

//         } else {
//             selectedCondiment.push(currentId);

//         }
//     } else if (!currentItem.checked) {
//         if(selectedCondiment.includes(currentId)) {
//            document.getElementById('printCondiment').innerHTML = '';
//            selectedCondiment = selectedCondiment.filter(c => c !== currentId);
//     } 
//      };
//      domBuilder3(selectedCondiment);
//  };
// //events Buttons
// const selectionEvents4 = (e) => {
//     // e.preventDefault();
//     const currentId = e.target.id;
//     const currentItem = document.getElementById(currentId);
//     if(currentItem.checked) {
//         if(selectedCheese.includes(currentId)) {

//         } else {
//             selectedCheese.push(currentId);

//         }
//     } else if (!currentItem.checked) {
//         if(selectedCheese.includes(currentId)) {
//            document.getElementById('printCheese').innerHTML = '';
//            selectedCheese = selectedCheese.filter(chz => chz !== currentId);
//     } 
//      };
//      domBuilder4(selectedCheese);
//  };

//  const selectionEvents5 = (e) => {
//     // e.preventDefault();
//     const currentId = e.target.id;
//     const currentItem = document.getElementById(currentId);
//     if(currentItem.checked) {
//         if(selectedVeggies.includes(currentId)) {

//         } else {
//             selectedVeggies.push(currentId);

//         }
//     } else if (!currentItem.checked) {
//         if(selectedVeggies.includes(currentId)) {
//            document.getElementById('printVeggies').innerHTML = '';
//            selectedVeggies = selectedVeggies.filter(veg => veg !== currentId);
//     } 
//      };
//      domBuilder5(selectedVeggies);
//  };


const eventL = (e) => {
    //const targetId = e.target.id
    const currentButton = document.getElementsByClassName('order');

    for (let i = 0; i < currentButton.length; i++) {
        currentButton[i].addEventListener('click', selectionEvents);
    }

    //    document.getElementById('white').addEventListener('click', selectionEvents);
    //    document.getElementById('wheat').addEventListener('click', selectionEvents);
    //    document.getElementById('whole').addEventListener('click', selectionEvents);

    //    document.getElementById('ham').addEventListener('click', selectionEvents2);
    //    document.getElementById('chicken').addEventListener('click', selectionEvents2);
    //    document.getElementById('tuna').addEventListener('click', selectionEvents2);

    //    document.getElementById('ranch').addEventListener('click', selectionEvents3);
    //    document.getElementById('mayonnaise').addEventListener('click', selectionEvents3);
    //    document.getElementById('mustard').addEventListener('click', selectionEvents3);

    //    document.getElementById('provolone').addEventListener('click', selectionEvents4);
    //    document.getElementById('swiss').addEventListener('click', selectionEvents4);
    //    document.getElementById('american').addEventListener('click', selectionEvents4);

    //    document.getElementById('lettuce').addEventListener('click', selectionEvents5);
    //    document.getElementById('tomatoes').addEventListener('click', selectionEvents5);
    //    document.getElementById('spinach').addEventListener('click', selectionEvents5);
};

let totalPrice = 0;
const domBuilder = (array) => {
    let domString = '';
    array.forEach((item) => {
        domString += `<p>${item}  $${allItems[item]} </p>`;
        totalPrice += allItems[item];
        printToDom('printSandwich', domString);
        console.log(totalPrice);

    });
};



// const domBuilder = (array) => {

//     let domString = '';
//     array.forEach((bread) => {
//     domString += `<p>${bread} bread $${allBread[bread]} </p>`

//     printToDom('printSandwich', domString);
// });

// }

// const domBuilder2 = (array) => {

//     let domString = '';
//     array.forEach((meat) => {
//     domString += `<p>${meat} $${allMeat[meat]} </p>`

//     printToDom('printMeat', domString);
// });

// }

// const domBuilder3 = (array) => {

//     let domString = '';
//     array.forEach((c) => {
//     domString += `<p>${c} $${allCondiments[c]} </p>`

//     printToDom('printCondiment', domString);
// });

// }

// const domBuilder4 = (array) => {

//     let domString = '';
//     array.forEach((chz) => {
//     domString += `<p>${chz} cheese $${cheeses[chz]} </p>`

//     printToDom('printCheese', domString);
// });

// }

// const domBuilder5 = (array) => {

//     let domString = '';
//     array.forEach((veg) => {
//     domString += `<p>${veg} $${allVeggies[veg]} </p>`

//     printToDom('printVeggies', domString);
// });

// }


export default { eventL };