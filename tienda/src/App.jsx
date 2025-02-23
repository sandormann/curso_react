import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Products from './components/products/products'
import Error from './components/Error'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/layout/layout'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path='/' element={<Products />} />
            <Route path='/categories/:id' element={<Products />}/>
            <Route path='/item/:id' element={<ItemDetailsContainer />}/> 
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
