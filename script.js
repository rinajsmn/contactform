
const form = document.querySelector('form');
const submit = document.getElementsByClassName('submit');

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const consent = document.getElementById('consent');


form.addEventListener('submit', e => {
  e.preventDefault();

  validateInput();
});
const showError = (element, text) => {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector('.error');

  displayError.innerText = text;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const success = element => {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector('.error');

  displayError.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isEmailValid = email => {
  const validEm = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return validEm.test(String(email).toLowerCase());
}
const validateInput = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

    if(firstNameValue === ''){
      showError(firstName, 'This field is required');
    } else {
      success(firstName);
    }

    if(lastNameValue === ''){
      showError(lastName, 'This field is required');
    } else {
      success(lastName);
    }

    if(emailValue === ''){
      showError(email, 'This field is required');
    } else if (!isEmailValid(emailValue)){
      showError(email, 'Please enter a valid email address');
    } else {
      success(email);
    }

    if(messageValue === ''){
      showError(message, 'This field is required');
    } else {
      success(message);
    }

    let checked = false;
    if(consent.checked) {
      checked = true;
    }
    if(!checked){
      showError(consent, 'To submit this form, please consent to being contacted');
    } else {
      success(consent);
    }
};


/*function toast(){
  let func = document.getElementById('toast');

  func.className = 'show';

  setTimeout(function(){ func.className = func.className.replace("show", ""); }, 5000);
};*/

const toast = () => {
  let func = document.getElementById('toast');

  func.className ='show';
  setTimeout(() => {
    func.className = func.className.replace('show', '');
  },5000);
};