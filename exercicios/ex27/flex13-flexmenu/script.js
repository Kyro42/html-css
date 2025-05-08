function clickmenu(){
    if (menu.style.display == 'flex'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}
function res(){
    if (window.innerWidth >= 580){
        menu.style.display = 'flex'
    } else{
        menu.style.display = 'none'
    }
}