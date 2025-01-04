import {Routes, Route} from 'react-router'
import { useNavigate } from 'react-router';
import Main from './pages/main'
import Todos from './pages/todo'
import Navbar from './components/Navbar';
import Error from './components/Error'
import Register from './pages/register'
import Login  from './pages/Login'
import './assets/css/App.css';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(()=>{
    if(token){
      navigate('/')
    }else{
      navigate('/signup')
    }
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/todo' element={<Todos/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
