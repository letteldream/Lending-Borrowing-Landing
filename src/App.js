import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./components/Work";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="how-it-work" element={<Work />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
