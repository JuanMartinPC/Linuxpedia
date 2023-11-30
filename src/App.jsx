import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LogIn from "./pages/LogIn.jsx";
import Register from "./components/Register.jsx";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Login" element={<LogIn />}/>
                <Route path="/Register" element={<Register />}/>
                <Route path="/add" element={<Create />}/>
            </Routes>
        </BrowserRouter>        
    </div>
  );
}

export default App
