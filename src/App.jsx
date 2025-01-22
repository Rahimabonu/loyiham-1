import './App.css'
import About from './components/about'
import Products from './components/products'
import Home from './components/home'
import {  Routes, Route } from 'react-router'
import Navbar from './components/navbar'
function App() {

  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/products" element={<Products/>}/>

    <Route path="*" element={<h1>Page not found</h1>}/>
   </Routes>

   <h1>App</h1>
   
   </>
  )
}

export default App
