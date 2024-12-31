import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import SignIn from './pages/Sign/Sign_in';
import SignUp from './pages/Sign/Sign_up';
import Search from './pages/search';
import Apitest from './pages/apitest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Apitest' element={<Apitest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
