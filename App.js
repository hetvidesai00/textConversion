
import './App.css';
import Alert from './component1/Alert';
import Navbar  from './component1/Navbar';
import TextForm from './component1/TextForm';
import { useState } from 'react';
import About from './component1/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type //can use same name like type assigned to type or message assigned to message
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils"/>
      <Alert alert={alert}></Alert>
      <div className="container my-5">
        <Routes>
          <Route excat path='/about' element={<About/>}></Route>
          <Route excat path='/' element={<TextForm heading="Enter text to analyze"  showAlert={showAlert}/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
