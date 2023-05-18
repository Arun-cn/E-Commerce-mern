
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';
import Register from './pages/Atuh/Register';
import Login from './pages/Atuh/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/policy" element={<Policy/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>}>
         <Route path="" element={<Dashboard/>}/>
      </Route>
      

    
    </Routes>
  );
}

export default App;
