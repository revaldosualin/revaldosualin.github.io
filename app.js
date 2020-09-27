const burger = document.querySelector('.header .navbar .nav-list .burger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const menu_item = document.querySelectorAll('.header .navbar .nav-list ul li a');
const header = document.querySelector('.header.container');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () =>{
	var scroll_position = window.scrollY;
	if(scroll_position > 250){
		header.style.backgroundColor = '#29323c';
	}

	else{
		header.style.backgroundColor = 'transparent';
	}

});

menu_item.forEach((item) => {
	item.addEventListener('click',()=>{
		burger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


var submitted = false;

function validateName() {
    var name = document.getElementById('name').value;
    if(!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)){
        alert("Please enter your correct name!!");
        return false;
    }

    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if(!email.match(/^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/)){
        alert("Please enter a valid email address!!");
        return false;
    }

    return true;
}

function resetForm() {
    document.getElementById('contact-form').reset();
    console.log('Reset');
}

function validateForm() {
    if(!validateName() || !validateEmail()){
        return false;
    }

    else{
        submitted = true;
        var thankyou = 'Your message was sent successfully. Thank you!';
        document.getElementById('success').append(thankyou);
        return true;
    }
}