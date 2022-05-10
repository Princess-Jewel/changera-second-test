import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        {/* <Route path="/signin" element={<Signin />}></Route> */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Signin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
