

const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
const toTop = document.querySelector('#toTop')

// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

// Hamburger section
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// klik diluar hamburgernya
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')  
    }
})


// dark mode toggle
const darkMode = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkMode.addEventListener('click', function() {
    if (darkMode.checked) {
        html.classList.add('dark');
        localStorage.theme = ('dark');
    } else {
        html.classList.remove('dark');
        localStorage.theme = ('light');
    }
})

