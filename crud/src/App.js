// import logo from './logo.svg';
import "./App.css";
import CRUDproduct from "./components/CRUDproduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="container">
        <Router>
          <Routes>
            <Route path="/*" element={<CRUDproduct />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
