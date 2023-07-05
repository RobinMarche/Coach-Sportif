function listenOnHamburgerMenuButton() {
    const hamburgerMenuButton = document.getElementById('open-menu-button')

    hamburgerMenuButton.addEventListener('click', (event) => {
        event.preventDefault()
        const hiddenMenu = document.getElementById('menu-button')
        hiddenMenu.classList.remove('hidden')

    })
}

listenOnHamburgerMenuButton()

function listenOnCloseMenuButton() {
    const hamburgerMenuButton = document.getElementById('close-button')

    hamburgerMenuButton.addEventListener('click', (event) => {
        event.preventDefault()
        const hiddenMenu = document.getElementById('menu-button')
        hiddenMenu.classList.add('hidden')

    })
}

listenOnCloseMenuButton()


function sendContactToEmail() {
    const form = document.getElementById('contact_form');

    form.action = "mailto:robin.marche@gmail.com?subject=" + document.getElementById('first-name').value + document.getElementById('last-name').value + document.getElementById('email').value + document.getElementById('phone-number').value + document.getElementById('message').value
}