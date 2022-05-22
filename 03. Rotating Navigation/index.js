const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

console.log(open)
console.log(close)
console.log(container)

open.addEventListener('click', () => {
    console.log('open')
    container.classList.add('show-nav')
})
close.addEventListener('click', () => {
    console.log('close')

    container.classList.remove('show-nav')
})
