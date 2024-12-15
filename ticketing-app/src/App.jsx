
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import EventIntro from "./component/EventIntro";
import RegistrationForm from "./componets/RegistrationForm";
import Home from "./Page/Home";
// import QRCode from "./component/QRCode";
// import QRCodeScanner from "./component/QRcodeScanner";
import QR from "./componets/QR";
import UserProfile from "./componets/profile";
import QRCodeScanner from "./componets/QRcodeScanner";
import SignUpPage from "./componets/Reg";
import QRCodePage from "./componets/Code";
import UserCard from "./componets/Card";
import UserCardPage from "./componets/Carder";


export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUpPage/>} />
          <Route path="/qrcode" element={<QRCodePage/>} />
          <Route path="/user/:username" element={<UserCardPage />} />
          <Route path="/scan" element={<QRCodeScanner/>}/>
        </Routes>
      </div>
    </Router>
  );
}
