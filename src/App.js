import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './pages/home';
import Contact from './pages/contact';
import Pricing from './pages/pricing';
import About from './pages/about';
import Blog from './pages/blog';
import Login from './pages/login';
import Signup from './pages/signup';
import Blog2 from './pages/blog2';
import TermsAndConditions from './pages/trAndCnd';
import PrivacyPolicy from './pages/privacyPolicy';
import PaymentSuccess from './pages/paymentSuccessful';
import PaymentFailed from './pages/paymentFailed';
import LogoutRoute from './pages/logout';
import ForgetPass from './pages/ForgetPass';

function App() {
  const location = useLocation();

  const hideFooterPaths = ['/login', '/signup', '/session/logout', '/password/new'];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  const hideNav = ['/session/logout'];
  const shouldHideNav = hideNav.includes(location.pathname);

  // use
  return (
    <div className="App">
      {!shouldHideNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/cancel" element={<PaymentFailed />} />
        <Route path="/password/new" element={<ForgetPass />} />
        <Route path="/session/logout" element={<LogoutRoute />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
