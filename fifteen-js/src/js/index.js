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