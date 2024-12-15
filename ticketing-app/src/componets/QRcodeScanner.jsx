import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const QRCodeScanResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const { state } = location;
    if (state && state.qrData) {
      try {
        const userData = JSON.parse(state.qrData); // Parse the QR code data
        setUserDetails(userData);
      } catch (error) {
        console.error("Invalid QR code data", error);
        navigate("/register");
      }
    } else {
      navigate("/register");
    }
  }, [location, navigate]);

  if (!userDetails) return <div>Loading...</div>;

  const { firstName, lastName } = userDetails;

  return (
    <div className="w-[300px] h-auto mx-auto mt-8 bg-white rounded-xl shadow-2xl p-4">
      <h2 className="text-center text-xl font-semibold">Welcome to the party, {firstName} {lastName}!</h2>
      <div className="text-center mt-4">
        <p className="italic">Here are your details:</p>
        <div className="mt-2">
          <p>Name: {firstName} {lastName}</p>
          {/* Add other details if needed */}
        </div>
      </div>
    </div>
  );
};

export default QRCodeScanResult;
