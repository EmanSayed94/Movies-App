import './App.css'
import Header from '../../components/Header'
import Home from '../Home'
import Favourites from '../Favourites'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourites />} />
      </Routes>
    </>
  )
}

export default App
