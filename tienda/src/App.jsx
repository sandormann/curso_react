import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/home'
import Products from './components/products/products'
import About from './components/about'
import Contact from './components/contact'
import Error from './components/error'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/layout/layout'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path='/' element={<Products />} />
            <Route path='/categories/:id' element={<Products />}/>
            {/* <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} /> */}
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
