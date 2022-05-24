import { HomePage } from "./components/HomePage";
import { Navbar } from "./components/Navbar";
import { WOD } from "./components/WOD";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={HomePage} element={<HomePage />} />
          <Route path="/WOD" exact component={WOD} element={<WOD />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
