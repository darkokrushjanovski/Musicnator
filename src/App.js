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
import UserProfile from "./pages/UserProfile";
import Croptest from "./pages/Croptest";
import Category from "./pages/Category";
import Footer from "./components/layout/Footer";

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
        <Route path="/musicians/all" element={<Users />} />
        <Route path="/musician/:uuid" element={<UserProfile />} />
        <Route path="/croptest" element={<Croptest />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;
