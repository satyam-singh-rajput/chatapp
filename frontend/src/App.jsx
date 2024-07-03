import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {Toaster} from 'react-hot-toast';
import { useAuthcontext } from './context/Authcontext';
function App() {
  const {Authuser}=useAuthcontext();
  return <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      conole.log(Authuser);
      <Route path='/'element={!Authuser ? <Navigate to ="/"/> :<Home/>}/>
      <Route path='/login' element={Authuser ? <Navigate to ="/"/> :<Login/>}/>
      <Route path='/signup' element={Authuser ? <Navigate to ="/"/> : <Signup/>}/>
    </Routes>
    <Toaster/>
  </div>
}

export default App
