import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
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
