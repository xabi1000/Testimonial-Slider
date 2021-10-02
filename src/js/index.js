const card = document.querySelectorAll('.card');
const cardArrow = document.getElementById('card__arrow');

// console.log(container);
// console.log(container[0].dataset.diretion);
// console.log(container[1]);
 console.log(card[0]);

const translateCard = translate => {
    console.log(translate)
}

cardArrow.addEventListener('click', (e) =>{
    console.log(e)
    // translateCard(e.target.dataset.diretion) 
});