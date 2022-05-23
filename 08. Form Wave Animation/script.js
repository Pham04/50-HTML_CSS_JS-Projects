const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    const splitWord = label.innerText.split('')

    wrapped = []
    splitWord.map((letter, index) => {
        const transformedTag = `<span style="transition-delay: ${index * 50}ms">${letter}</span>`
        wrapped.push(transformedTag)
    })

    label.innerHTML = wrapped.join('')
})