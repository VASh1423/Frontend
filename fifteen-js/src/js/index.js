const containerNode = document.getElementById('fifteen')
const itemNodes = Array.from(containerNode.querySelectorAll('.item'))
const countItems = 16

if(itemNodes.length != 16){
  throw new Error(`Должно быть ровно ${countItems} элементов`)
}

itemNodes[countItems - 1].style.display = 'none'
let matrix = getMatrix(itemNodes.map(item => Number(item.dataset.matrixId)))

setPositionItems(matrix)

document.getElementById('shuffle').addEventListener('click', () => {
  const shuffledArray = shuffleArray(matrix.flat())
  matrix = getMatrix(shuffledArray)
  setPositionItems(matrix)
})

const blankNumber = 16
containerNode.addEventListener('click', event => {
  const buttonNode = event.target.closest('button')
  if(!buttonNode){
    return
  }

  const buttonNumber = Number(buttonNode.dataset.matrixId)
  const buttonCords = findCoordinatesByNumbers(buttonNumber, matrix)
  const blankCords = findCoordinatesByNumbers(blankNumber, matrix)
  const isValid = isValidForSwap(buttonCords, blankCords)

  if(isValid){
    swap(blankCords, buttonCords, matrix)
    setPositionItems(matrix)
  }
})

window.addEventListener('keydown', (event) => {
  if(!event.key.includes('Arrow')){
    return
  }
  const blankCords = findCoordinatesByNumbers(blankNumber, matrix)
  const buttonCords = {
    x: blankCords.x,
    y: blankCords.y
  }
  const direction = event.key.split('Arrow')[1].toLowerCase()
  const maxIndexMatrix = matrix.length

  switch(direction){
    case 'up':
      buttonCords.y += 1
      break
    case 'down':
      buttonCords.y -= 1
      break
    case 'left':
      buttonCords.x += 1
      break
    case 'right':
      buttonCords.x -= 1
      break
  }

  if(buttonCords.y >= maxIndexMatrix || buttonCords.y < 0 || buttonCords.x >= maxIndexMatrix || buttonCords.x < 0){
    return
  }

  swap(blankCords, buttonCords, matrix)
  setPositionItems(matrix)
})

function getMatrix(arr){
  const matrix = [[], [], [], []]
  let x = 0
  let y = 0

  for(let i = 0; i < arr.length; i++){
    if(x >= 4){
      y++
      x = 0
    }

    matrix[y][x] = arr[i]
    x++
  }

  return matrix
}

function setPositionItems(matrix){
  for(let y = 0; y < matrix.length; y++){
    for(let x = 0; x < matrix.length; x++){
      const value = matrix[y][x]
      const node = itemNodes[value - 1]
      setNodeStyle(node, x, y)
    }
  }
}

function setNodeStyle(node, x, y){
  const shiftPs = 100
  node.style.transform = `translate3D(${x * shiftPs}%, ${y * shiftPs}%, 0)`
}

function shuffleArray(arr){
  return arr
    .map(value => ({value, sort: Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(({value}) => value)
}

function findCoordinatesByNumbers(number, matrix){
  for(let y = 0; y < matrix.length; y++){
    for(let x = 0; x < matrix.length; x++){
      if(matrix[y][x] === number){
        return {x, y}
      }
    }
  }
  return null
}

function isValidForSwap(coords1, coords2){
  const diffX = Math.abs(coords1.x - coords2.x)
  const diffY = Math.abs(coords1.y - coords2.y)

  return (diffX === 1 || diffY === 1) && (coords1.x === coords2.x || coords1.y === coords2.y)
}

function swap(coords1, coords2, matrix){
  const coordNumber = matrix[coords1.y][coords1.x]
  matrix[coords1.y][coords1.x] = matrix[coords2.y][coords2.x]
  matrix[coords2.y][coords2.x] = coordNumber

  if(isWon(matrix)){
    addWonClass()
  }
}

const winArray = new Array(16).fill(0).map((_item, index) => index + 1)
function isWon(matrix){
  const flatMatrix = matrix.flat()
  for(let i = 0; i < winArray.length; i++){
    if(winArray[i] < flatMatrix[i]){
      return false
    }
  }
  return true
}

const wonClass = 'fifteenWon'
function addWonClass(){
  setTimeout(() => {
    containerNode.classList.add(wonClass)

    setTimeout(() => {
      containerNode.classList.remove(wonClass)
    }, 1000)
  }, 200)
}