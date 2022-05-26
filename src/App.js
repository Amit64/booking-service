
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Appoinment from './components/Appoinment/Appoinment';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className=' lg:max-w-7xl mx-auto'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/appoinment" element={<Appoinment/>}></Route>
        <Route path="/login" element={<Login/>}></Route> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
