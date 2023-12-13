import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import MainPage from './pages/MainPage'
import ToastProvider from './context/ToastProvider'
import Cart from './pages/Cart'
import OrdersHistory from './pages/OrdersHistory'

function App() {

  return (
    <div className='app-container'>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/orders' element={<OrdersHistory/>}/>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </div>
  )
}

export default App
