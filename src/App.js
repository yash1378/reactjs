// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
import React, { useState } from "react";
import Alert from "./components/Alert";
import{
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   // document.body.classList.remove('bg-')
  // }
  // const setTimeout(()=>{
  //   setAlert(null);
  // },3000);
  // }
  // const togglemode = (cls) => {
  //   removeBodyClasses();
  //   document.body.classList.add('bg-'+cls)
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#042743";
  //     showAlert("Dark mode has been enabled", "Success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "Success");
  //   }
  // };
  const togglemode = () => {

    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
      document.title='Textutils-Light Mode';
      setInterval(()=>{
        document.title='Install TextUtils Now';
      },1500);
      setInterval(()=>{
        document.title='TextUtils is Amazing Mode';
      },1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title='Textutils-Dark Mode'
    }
  };






  return (
    // <div className=="App">
    //   <header className=="App-header">
    //     <img src={logo} className=="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className=="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}  abouttext="About"/>
      <div>
        <Alert alert={alert} />
      </div>
      <div className="container">
        
        
      
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}/>
    


        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
