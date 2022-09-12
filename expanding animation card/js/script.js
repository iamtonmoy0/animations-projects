const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active'); //this will add the active class to the panel that was clicked

}));

function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove('active')); //this will remove the active class from all the panels
};