import './App.css';
import Header from "./Component/Header"
import Footer from "./Component/Footer";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import SignIn from './pages/SignIn'
import User from './pages/User'
import Books from './pages/Books'
import Menudetails  from './pages/Menudetails';
import Protected from './pages/Protected';
import Upload from './pages/Upload'
import Cartpage from './pages/Cartpage'

export default function App(){
	return (
		<>

		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="/services" element={<Services/>}/>
			<Route path="/registration" element={<Registration/>}/>
			<Route path="/login" element={<Login/>}/>
			<Route path="/books" element={<Books/>}/>
			<Route path="/contact" element={<Contact/>}/>
			<Route path="/signin" element={<SignIn/>}/>
			<Route path="/user" element={<Protected Cmp ={User}/>}/>
			<Route path="/upload" element={<Protected Cmp ={Upload}/>}/>
			{/* <Route path="/menuitem" element={<Protected Cmp ={Menu}/>}/> */}
			<Route path="/cartpage"element={<Cartpage/>}/>
			<Route path="/menu-detail/:id" element={<Menudetails/>}/>
			

		</Routes>
	     </BrowserRouter>
		</>
	);
}
	

