import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Main/Home/Home";
import Login from "./Components/Login/Login";
import SignIn from "./Components/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
