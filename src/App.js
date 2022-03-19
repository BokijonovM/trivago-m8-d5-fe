import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMain from "./components/main/MyMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyLogin from "./components/login&signUp/MyLogin";
import MySignUp from "./components/login&signUp/MySignUp";
import Home from "./components/main/Home";
import MyLayout from "./components/main/MyLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/home" element={<MyLayout><Home /></MyLayout>} />
          <Route path="/login" element={<MyLogin />} />
          <Route path="/signUp" element={<MySignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
