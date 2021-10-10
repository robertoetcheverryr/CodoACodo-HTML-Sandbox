    function toggleHamburger() {
    let items = document.getElementsByClassName("nav-item");
    for(let x=0; x < items.length; x++){
    if(items[x].classList.contains("nav-first")){
    continue;
}
    items[x].classList.toggle('show');
}
}
    /*This JS snippet will register an event and clean up the show class if the window is resized with
    the nav bar expanded.
    */
    const mediaQuery = 'screen and (max-width: 498px)';
    const mediaQueryList = window.matchMedia(mediaQuery);
    mediaQueryList.addEventListener('change', event => {
    if (!event.matches) {
    const items = document.getElementsByClassName("nav-item");
    for(let x=0; x < items.length; x++){
    items[x].classList.remove('show');
}
}
})
