import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => { setAlert(null); }, 
    1500);
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  // }

  const toggleMode = () => {
    // removeBodyClasses()
    // console.log(cls);
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
        {/* <Navbar/> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users ---> Component 1
            /users/home ---> Component 2 */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} />
              {/* <TextForm showAlert={showAlert} heading="Enter the text to Analyze below." mode={mode} /> */}
            {/* </Route> */}
              {/* <About /> */}
            <Route exact path="/about" element={<About mode={mode} />} />
            {/* </Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
