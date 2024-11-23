var hoverbtn = document.getElementById("hover-btn");
hoverbtn.addEventListener('mouseenter', function(){
    this.style.backgroundColor = 'yellow';
});

hoverbtn.addEventListener('mouseleave', function(){
    this.style.backgroundColor = 'transparent';
});

var keyboardEvent = document.getElementById('keyboard-event');
keyboardEvent.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
})

var form = document.getElementById('form');
var userName = document.getElementById('name');
var gender = document.getElementById('gender');

form.addEventListener('submit', function(event) {
    console.log('Form submitted');
    event.preventDefault();
    alert(`Name: ${userName.value}, Gender: ${gender.value}`);
});

var messageFocus = document.getElementById('focus');
messageFocus.addEventListener('focus', function(){
    this.style.backgroundColor = 'blue';
})

messageFocus.addEventListener('blur', function(){
    this.style.backgroundColor = 'red';
})