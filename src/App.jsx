import './App.scss'
import Modal from './components/Modal'
import { useState } from 'react'

function App() {
  const [modalState, setModalState] = useState(false)

  function openModal(){
    setModalState(!modalState)
  }

  return (
    <div className='App'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil
        architecto suscipit animi nostrum atque! Reprehenderit esse iusto sequi
        magnam, architecto omnis eum fugit nostrum at odio illo repellendus.
        Voluptatum.
      </p>
      <button onClick={openModal} >Open Modal</button>
      <Modal toggle={modalState} action={openModal}/>
    </div>
  )
}

export default App
