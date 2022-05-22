const boxes = document.querySelectorAll('.box')


checkBoxes() //initialize

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4 //less than bottom -> trigger

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top 

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
