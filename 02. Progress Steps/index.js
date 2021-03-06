const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    if (currentActive >= circles.length) {
        circleActive = circles.length
    } else currentActive++
    updateDOM()
})

prev.addEventListener('click', () => {
    if (currentActive == 1) {
        circleActive = 1
    } else currentActive--
    updateDOM()
})

function updateDOM() {
    // active the circle
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // active the line
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    //de-active -> prev btn
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
