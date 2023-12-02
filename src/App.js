import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
function App() {

const [alert,setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
   <>
    <Navbar tittle = 'textutils' aboutText='about TextUtils'/>
    <Alert> alert = {alert}</Alert>
    
    <div className="container my-3">
    <Textform heading = "Enter the text to Analyze below"/>
    </div>
    <About/>
   </>
   );
}

export default App;
