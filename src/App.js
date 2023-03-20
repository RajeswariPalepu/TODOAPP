
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Register from './Component/Register';
import Login from './Component/Login';
import Home from './Component/Home';
import Dashboard from "./Component/Dashboard";
import SetPassword from "./Component/SetPassword";
import ForgotPassword from "./Component/ForgotPassword";
import Viewprofile from "./Component/Charts/Viewprofile";
import Resetpassword from "./Component/Resetpassword";
import SubComponentsPickers from "./Component/Charts/Calendar";
import SetForgotPassword from "./Component/SetForgotPassword";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/setforgotpassword' element={<SetForgotPassword/>} />
          <Route path='/setpassword' element={<SetPassword />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/viewprofile' element={<Viewprofile/>} />
          <Route path='/resetpassword' element={<Resetpassword/>} />
          <Route path="/calendar" element={<SubComponentsPickers/>}/>
        </Routes>
        
      </BrowserRouter>



    </div>
  );
}

export default App;
