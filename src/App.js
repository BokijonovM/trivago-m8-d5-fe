import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMain from "./components/main/MyMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyLogin from "./components/login/MyLogin";
import MySignUp from "./components/singin/MySignUp";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<MyLogin />} />
          <Route path="/sign-in" element={<MySignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
