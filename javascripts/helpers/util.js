import breads from '../component/bread.js'

const printToDom = (divId, textToPrint) =>{
    const selectedDiv = document.getElementById(divId);  
    selectedDiv.innerHTML = textToPrint;
};

const selectionEvents = (e) => {
    e.preventDefault();
    const currentId = e.target.id;

    
};

const eventL = () => {
    document.addEventListener('click', selectionEvents)
};


export default { eventL };