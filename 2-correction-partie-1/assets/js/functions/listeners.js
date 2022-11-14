var nav = document.querySelector('nav.header-left')
var iconNav = document.querySelector('.header-top-left .header-icon')
var listes = document.querySelectorAll('.header-left ul li')

var listenerFunctions = {
    openNav: ()=>{
        nav.style.display = "block"
    },
    closeNav: ()=>{
        nav.style.display = "none"
    }
}

var setupListeners = () =>{
    iconNav.onmouseover = listenerFunctions.openNav
    nav.onmouseleave = listenerFunctions.closeNav
    for(let index = 0; index < listes.length; index++){
        const li = listes[index];
        li.onclick = listenerFunctions.closeNav
    }

}