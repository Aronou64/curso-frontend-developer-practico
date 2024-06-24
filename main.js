const menu = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const in_menu_mobile = document.querySelector(".mobile-menu")
const menu_mobile = document.querySelector(".menu")

//condicional del carro de compras 
const logo_carrito = document.querySelector('.navbar-shopping-cart')
const product = document.querySelector('.product-detail')


logo_carrito.addEventListener('click',toggleProduct)
menu.addEventListener('click',toggleDesktopMenu)
menu_mobile.addEventListener('click',toggleDesktopMenuMobile)
function toggleDesktopMenu(){
    const isAsideOpen = logo_carrito.classList.contains('inactive')
    if(!isAsideOpen){
        product.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleDesktopMenuMobile(){
    const isAsideOpen = logo_carrito.classList.contains('inactive')
    if(!isAsideOpen){
        product.classList.add('inactive')
    }
    in_menu_mobile.classList.toggle('inactive')
}

function toggleProduct(){
    const isMobileMenuOpen = in_menu_mobile.classList.contains('inactive')
    const isDesktopMenuOpen = desktopMenu.classList.contains('inactive')
    if(!isMobileMenuOpen){
        in_menu_mobile.classList.add('inactive')

    }
    if(!isDesktopMenuOpen){
        desktopMenu.classList.add('inactive')
    }
    product.classList.toggle('inactive')
}
