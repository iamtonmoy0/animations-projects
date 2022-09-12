const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes() {
    const triggerBomb = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBomb) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}