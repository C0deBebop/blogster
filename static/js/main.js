const newsprintButton = document.querySelector('.newsprint');
const newspaperButton = document.querySelector('.newspaper');
const darkmossButton = document.querySelector('.darkmoss');
const darknightButton = document.querySelector('.darknight');
const homepageSignupButton = document.querySelector('.left-column button');

function switchStylesheet(styleSheet){
    localStorage.setItem('theme', styleSheet);
    let siteTheme= localStorage.getItem('theme');
    document.querySelector('#styleSheet').setAttribute('href', siteTheme);
}

function createSignupForm(){
    const container = document.createElement('div');
    const div = document.createElement('div');
    const form = document.createElement('form');
    const h2 = document.createElement('h2');
    const username = document.createElement('input');
    const email = document.createElement('input');
    const password = document.createElement('input');
    const confirmPassword = document.createElement('input');
    const h2Text = document.createTextNode('Sign up');
    const accountMessage = document.createElement('span');
    const signupButton = document.createElement('button');
    const signupText = document.createTextNode('Sign up');
    const accountMessageText = document.createTextNode('Have an account?');

    const signinLink = document.createElement('a');
    const signinButtonText = document.createTextNode('Sign in');

    container.setAttribute('id', 'signup-container');
    div.setAttribute('id', 'signup');
    username.setAttribute('type', 'text');
    username.setAttribute('id', 'username');
    username.setAttribute('placeholder', 'Username');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', '/signup');
    email.setAttribute('type', 'email');
    email.setAttribute('id', 'email');
    email.setAttribute('placeholder', 'E-mail');
    password.setAttribute('type', 'password');
    password.setAttribute('id', 'password');
    password.setAttribute('placeholder', 'Password');
    confirmPassword.setAttribute('type', 'password');
    confirmPassword.setAttribute('id', 'confirm-password');
    confirmPassword.setAttribute('placeholder', 'confirm password');
    signinLink.setAttribute('href', '');
    signinLink.appendChild(signinButtonText);
    accountMessage.append(accountMessageText);
    h2.appendChild(h2Text);
    signupButton.appendChild(signupText);
    form.appendChild(h2);
    form.appendChild(username);
    form.appendChild(email);
    form.appendChild(password);
    form.appendChild(confirmPassword);
    form.appendChild(signupButton);
    div.appendChild(form);
    div.appendChild(accountMessage);
    div.appendChild(signinLink);
    container.appendChild(div);
    document.querySelector('.left-column').appendChild(container);

    signinLink.addEventListener('click', (e) => {
        e.preventDefault();
        createSigninForm();
    })

    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        let jsonData = JSON.stringify({
            "username" : document.querySelector('#username').value,
            "email" : document.querySelector('#email').value,
            "password" : document.querySelector('#password').value,
            "confirmPassword" : document.querySelector('#confirm-password').value
        })
        saveUserData(jsonData);
    })
}


function saveUserData(data){
        fetch('http://localhost:5000/signup', {
             method: 'POST',
             headers: {'Content-Type' : 'application/json'},
             mode: 'cors',
             body: data
        })
        .then(response => response.json())
        .then(data => checkAccountStatus(data))
        .catch(err => console.log(err))
}

function signinUser(data){
   fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        mode: 'cors',
        body: data
   })
   .then(response => response.json())
   .then(data => checkAccountStatus(data))
   .catch(err => console.log(err))
}

function checkAccountStatus(data){
   if(data['status'] == 200) {
      window.location.href='/';
   } 
}

function createSigninForm(){
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const form = document.createElement('form');
    const email = document.createElement('input');
    const password = document.createElement('input');
    const signinButton = document.createElement('button');
    const h2Text = document.createTextNode('Sign in');
    const signinButtonText = document.createTextNode('Sign in');
    div.setAttribute('id', 'signin');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', '/signin');
    email.setAttribute('type', 'email');
    email.setAttribute('id', 'email');
    email.setAttribute('placeholder', 'E-mail')
    password.setAttribute('type', 'password');
    password.setAttribute('id', 'password');
    password.setAttribute('placeholder', 'Password');
    signinButton.appendChild(signinButtonText);
    h2.appendChild(h2Text);
    form.appendChild(h2);
    form.appendChild(email);
    form.appendChild(password);
    form.appendChild(signinButton);
    div.appendChild(form);
    document.querySelector('#signup').remove();
    document.querySelector('#signup-container').appendChild(div);
    signinButton.addEventListener('click', (e) => {
        e.preventDefault();
        let data = JSON.stringify({'email' : document.querySelector('#email').value, 'password' : document.querySelector('#password').value})
        signinUser(data);
    })
}

newsprintButton.addEventListener('click', (e) => {
    e.preventDefault();
    switchStylesheet('/static/css/newsprint.css');
})

newspaperButton.addEventListener('click', (e) => {
    e.preventDefault();
    switchStylesheet('/static/css/newspaper.css');
})

darkmossButton.addEventListener('click', (e) => {
    e.preventDefault();
    switchStylesheet('/static/css/darkmoss.css');
})

darknightButton.addEventListener('click', (e) => {
    e.preventDefault();
    switchStylesheet('/static/css/darknight.css');
})

homepageSignupButton.addEventListener('click', (e) => {
    e.preventDefault();
    createSignupForm();

})


