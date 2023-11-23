import { Todos } from './components/Todos'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import TodoDetails from './components/TodoDetails'
import TodoEdit from './components/TodoEdit'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Routes>
        <Route path='/' element={<Todos/>}/>
        <Route path='/todo/:id' element={<TodoDetails/>}/>
        <Route path='/todo/:id/edit' element={<TodoEdit/>} />
      </Routes>
    </>
  )
}

export default App
