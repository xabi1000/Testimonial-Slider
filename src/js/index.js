const card = document.querySelectorAll('.card');
const cardArrow = document.getElementById('card__arrow');

console.log(card[0].classList);

const slideCard = translate => {
    if (translate === 'next'){
        card[0].classList.add('ToLeft');
        card[1].classList.add('ToLeft');
    }else{
        card[0].classList.remove('ToLeft');
        card[1].classList.remove('ToLeft');   
}

}
 cardArrow.addEventListener('click', (e) =>{
    slideCard(e.target.dataset.direction); 
 });