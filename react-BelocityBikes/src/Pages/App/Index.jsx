import Home from '../Home'
import Micuenta from '../MyAccount'
import Orden from '../MiOrden'
import MisOrdenes from '../MisOrdenes'
import Not404 from '../NotFound404'
import SignIn from '../SignIn'
import Cuenta from '../MyAccount'


import './App.css'

function App() {
 
  return (
   
      <div className='bg-fuchsia-950'>
       <Home/>
       <Cuenta/>
       <Orden/>
       <MisOrdenes/>
       <Not404/>
       <SignIn/>
       <Cuenta/>
      </div>
     
  )
}

export default App
