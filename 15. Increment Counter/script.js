const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = 0

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200 // finish at the same time

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            console.log(Math.ceil(c + increment))
            setTimeout(updateCounter, 1) //recursion
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})