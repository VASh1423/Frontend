import {useState} from 'react'
import './App.css';

function App() {
  const [drag, setDrag] = useState(false)

  function dragStartHandler(e){
    e.preventDefault()
    setDrag(true)
  }

  function dragLeaveHandler(e){
    e.preventDefault()
    setDrag(false)
  }

  function onDropHandler(e){
    e.preventDefault()
    let files = [...e.dataTransfer.files]
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('userId', 1)
    axios.post('url', formData, options)

    setDrag(false)
  }

  return (
    <div className="App">
      {drag 
        ? <div className='drop-area'
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
            onDrop={e => onDropHandler(e)}
          >Отпустите файлы, чтобы загрузить их</div>
        : <div className=''
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
          >Перетащите файлы, чтобы загрузить их</div>
      }
    </div>
  );
}

export default App;
