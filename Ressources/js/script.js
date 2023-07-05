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

