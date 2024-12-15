import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./componets/RegistrationForm";
import Home from "./Page/Home";
import UserProfile from "./componets/profile";
import QRCodeScanner from "./componets/QRcodeScanner";
import QRCode from "./componets/QRCode";

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/scan" element={<QRCodeScanner />} />
        </Routes>
      </div>
    </Router>
  );
}
