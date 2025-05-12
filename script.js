const click = document.querySelector('.click');
const shadow = document.querySelector('.shadow');
const giftBox = document.querySelector('.gift-box');
const giftContainer = document.querySelector('.gift-container');
const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');

click.addEventListener('click', () => {
	if(click.className === "click") {
		click.classList.add('active');
		shadow.classList.add('active');
		giftBox.classList.add('active');
		giftContainer.classList.add('active');
		cardContainer.classList.add('active');
	} else {
		click.classList.remove('active');
		shadow.classList.remove('active');
		giftBox.classList.remove('active');
		giftContainer.classList.remove('active');
		cardContainer.classList.remove('active');
		card.classList.remove('active');
	}
});

cardContainer.addEventListener('click', () => {
	if(card.className === "card") {
		card.classList.add('active');
	} else {
		card.classList.remove('active');
	}
});