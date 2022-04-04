import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
