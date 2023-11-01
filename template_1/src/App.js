import { BrowserRouter } from 'react-router-dom'
import './App.css'
import HomeMain from './components/home/HomeMain'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    </div>
  )
}

export default App
