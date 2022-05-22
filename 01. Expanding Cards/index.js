const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
    panel.addEventListener('click',() => {
        deActive()
        panel.classList.add('active')
    })
})

function deActive() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
} // remove all active