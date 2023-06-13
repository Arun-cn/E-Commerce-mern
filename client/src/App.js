
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
import ForgotPassword from './pages/Atuh/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Users from './pages/Admin/Users';
import CreateCategory from './pages/Admin/createCategory';
import CreateProduct from './pages/Admin/createProduct';
import Profile from './pages/user/Profile';
import Oders from './pages/user/Oders';
import Products from './pages/Admin/Products';
import { UpdateProduct } from './pages/Admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/search" element={<Search />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/policy" element={<Policy/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>}>
         <Route path="user" element={<Dashboard/>}/>
         <Route path="user/profile" element={<Profile/>}/>
         <Route path="user/oders" element={<Oders/>}/>
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>}>
        <Route path="admin" element={<AdminDashboard/>}/>
        <Route path="admin/create-product" element={<CreateProduct/>}/>
        <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
        <Route path="admin/create-category" element={<CreateCategory/>}/>
        <Route path="admin/products" element={<Products />} />
        <Route path="admin/Users" element={<Users/>}/>
         
      </Route>
      

    
    </Routes>
  );
}

export default App;
