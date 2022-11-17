import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import { Routes, Route } from "react-router-dom";



function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/" element = {<Login/>} />
        <Route index element={<Login/>} />
        <Route path="register" element={<Register/>} />
      </Routes>

    </div>
  );
}

export default App;
