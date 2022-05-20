import "./App.css";
import NavbarMenu from "./components/layout/NavbarMenu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadForm from "./pages/UploadForm";
import Users from "./components/users/Users";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="*" element={<NotFound />} />
        <Route path="musicians/all" element={<Users />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;
