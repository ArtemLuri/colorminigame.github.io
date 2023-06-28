const board = document.querySelector('#board')
const colors = ['#2068f7','#ffb700','#7f6d3d','#db6918','#e014da','#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71','#00ff26']
const squearesNumber =980

for(let i = 0; i < squearesNumber; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 105px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = ''
    element.style.boxShadow = `0 0 2px `
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}