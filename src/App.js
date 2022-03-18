import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMain from "./components/main/MyMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyLogin from "./components/login/MyLogin";
import MySignIn from "./components/singin/MySignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/login" element={<MyLogin />} />
          <Route path="/sign-in" element={<MySignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
