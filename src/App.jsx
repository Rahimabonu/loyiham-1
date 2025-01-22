import './App.css'
import Home from './components/home'
import About from './components/about'
import Products from './components/products'
import { Routes, Route } from "react-router"
import Navbar from './components/navbar'
import Layout from './layout/layout'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/products" element={<Products />} >
          <Route index element=
          {<h3>Ko'p sotiladigan tovarlar</h3>}></Route>
          <Route path='trend' element={<h3>Trend tovarlar</h3>}></Route>
          <Route path='cheap' element={<h3>Arzon tovarlar</h3>}></Route>
        </Route>
        <Route path='*' element={<h1>404-is not found</h1>}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
