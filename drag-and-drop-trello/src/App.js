import { useState } from 'react';
import './App.css';

function App() {
  const [boards, setBoards] = useState([
    {id: 1, title: 'Сделать', items:[{id: 1, title: 'Купить'}, {id: 1, title: 'Пролдать'}]},
    {id: 2, title: 'Проверить', items:[{id: 1, title: 'код ревью'}]},
    {id: 3, title: 'Сделано', items:[{id: 1, title: 'Отдохнуть'}, {id: 2, title: 'Спать'}]}
  ])

  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  function dragStartHandler(e, board, item){
    setCurrentBoard(board)
    setCurrentItem(item)
  }

  function dragEndHandler(e){
    e.target.style.boxShadow = 'none'
  }

  function dragOverHandler(e){
    e.preventDefault()
    if(e.target.className === 'item'){
      e.target.style.boxShadow = '0 4px 3px gray'
    }
  }

  function dragLeaveHandler(e){
    e.target.style.boxShadow = 'none'
  }

  function dropHandler(e, board, item){
    e.preventDefault()
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)
    const dropIndex = board.items.indexOf(item)
    board.items.splice(dropIndex+1, 0, currentItem)
    setBoards(boards.map(b =>{
      if(b.id === board.id){
        return board
      }
      if(b.id === currentBoard.id){
        return currentBoard
      }
      return b
    }))
  }

  function dropCardHandler(e, board){
    board.items.push(currentItem)
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)
    setBoards(boards.map(b =>{
      if(b.id === board.id){
        return board
      }
      if(b.id === currentBoard.id){
        return currentBoard
      }
      return b
    }))
  }

  return (
    <div className="App">
      {boards.map(board => 
        <div 
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}
          className='board'>
          <div className='board__title'>
            {board.title}
          </div>
          {board.items.map(item =>
            <div
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragLeave={(e) => dragEndHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={e => dragLeaveHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              draggable={true}
              className='item'
            >{item.title}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
