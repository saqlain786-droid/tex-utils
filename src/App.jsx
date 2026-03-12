import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const[mode, setMode] = useState('light');//whether dark mode is enabled or not
  const[alert,setAlert] = useState(null);
let alertTimeout;

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type,
  });

  clearTimeout(alertTimeout); // clear previous timer

  alertTimeout = setTimeout(() => {
    setAlert(null);
  }, 3000);
};

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark-Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light-Mode'
    }
  }
  return (
    <>
      <Navbar
        title="TextUtils2"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
  
      <Alert alert={alert} />
  
      <div className="container my-4">
        <Routes>
          <Route path="/" element={
            <TextForm
              showAlert={showAlert}
              heading="Enter Text to analyze"
              mode={mode}
            />
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
        }
export default App;
        