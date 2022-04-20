import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Form from './components/Form';
import React,{useState} from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
      setAlert({
          msg:message,
          type:type
        });
        setTimeout(()=>{
          setAlert(null);
        },1500);
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
   
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      <div className="container">
          <Routes>
              <Route exact path="/" element={<Form heading="Enter Your Text to Analyze Below" showAlert={showAlert} mode={mode} /> } />
              <Route exact path="/About" element={   <About mode={mode}  /> } />
          </Routes>
      </div>
     
      </Router>
    </>
  );
}

export default App;
