const tagsEl = document.querySelector('.tags')

const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) // trim input
    
    tagsEl.innerHTML = ''

    tags.forEach((tag) => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30

    const pickingAnimation = setInterval(() => {
        // const tags = document.querySelectorAll('.tag') //duplicate1
        // animation picking randomly
        const randomTag = pickRandomTag()
        // tags[Math.floor(Math.random() * tags.length)] //duplicate1
        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)


    //settime to clearinterval(random picking animation) => settimeout for highligh tag => random => highlight
    setTimeout(() => {
        clearInterval(pickingAnimation)

        setTimeout(() => {
            // const tags = document.querySelectorAll('.tag') //duplicate2
            const randomTagResult = pickRandomTag()
            //tags[Math.floor(Math.random() * tags.length)] //duplicate2 => function
            highlightTag(randomTagResult)
        })
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}