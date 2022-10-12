const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector('.nav__wrapper__ul');

// add click event on toggle
toggle.addEventListener('click', () => {
	ul.classList.toggle('nav__active');
});

// name typewrite effect
const nameElement = document.querySelector('.header__data__contents__heading');
const nameText = "Laxman Aryal"
let start = 0;

const typeWrite = () => {
    if(start < nameText.length) {
		nameElement.innerHTML += nameText.charAt(start);
		start++;
		setTimeout(typeWrite, 300);
	}
}
typeWrite();

// open / close modal

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__wrapper__close')

// open modal
modalBtn.addEventListener('click', () => {
	modal.style.display = "flex";
})

// close modal
modalClose.addEventListener('click', () => {
	modal.style.display = "none";
})

// get current year
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();



  
function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
	let subject = document.getElementById("subject").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br> Email : ${subject} <br>  Message : ${message} <br>`;
    email.send({
        Host : "smtp.gmail.com",
		Username : "laxuaryal@gmail.com",
        Password : "Laxya@1234",
		Port : "587",
        To : 'laxman.aryal@hotmail.com',
        From : "laxya.info",
        Subject : "Mail from website",
        Body : finalmessage
    }).then(
      message => alert(message)
    );
}