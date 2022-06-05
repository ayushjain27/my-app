import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // NavLink,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#252b6e';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Webpage - Dark Page";
      //   setInterval(() => {
      //     document.title = 'Webpage is Amazing Mode';
      //   }, 2000);
      //   setInterval(() => {
      //     document.title = 'Install Webpage now';
      //   }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "Webpage - light Page";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="my-app" aboutText="About my-app" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try Webpage - Word Counter, Character Counter, Remove extra Spaces" mode={mode}/>}/>  
            {/* <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/> */}
          </Routes>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
