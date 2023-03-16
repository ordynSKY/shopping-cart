import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/cart" Component={Cart} />
                    <Route path="/" Component={Home} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
