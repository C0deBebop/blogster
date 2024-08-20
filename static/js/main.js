const newsprintButton = document.querySelector('.newsprint');
const newspaperButton = document.querySelector('.newspaper');
const darkmossButton = document.querySelector('.darkmoss');
const darknightButton = document.querySelector('.darknight');

function switchStylesheet(styleSheet){
    localStorage.setItem('theme', styleSheet);
    let siteTheme= localStorage.getItem('theme');
    document.querySelector('#styleSheet').setAttribute('href', siteTheme);
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
