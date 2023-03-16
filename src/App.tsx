import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/cart" Component={Cart} />
                    <Route path="/*" Component={NotFound} />
                    <Route path="/" Component={Home} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
