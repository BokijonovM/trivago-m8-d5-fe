import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMain from "./components/main/MyMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
