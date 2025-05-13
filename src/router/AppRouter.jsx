import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import AddReview from "../pages/AddReview";
import Bolgeler from "../pages/Bolgeler";
import AracSecimi from "../pages/AracSecimi"; // doğru yolu senin dosya yapına göre ayarla
import VipServicePage from "../pages/VipServicePage"; // doğru yolu senin dosya yapına göre ayarla
import AboutPage from "../pages/AboutPage";
import FaqPage from "../pages/FaqPage";
import ReviewList from "../pages/ReviewList";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Giriş gerektirmeyen sayfalar */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />       
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bolgeler" element={<Bolgeler />} />
        <Route path="/arac-secimi" element={<AracSecimi />} />
        <Route path="/vip/:slug" element={<VipServicePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/yorum" element={<ReviewList />} />
        {/* Giriş gereken sayfalar */}
        <Route path="/" element={<PrivateRouter />}>
          <Route path="yorum-ekle" element={<AddReview />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
