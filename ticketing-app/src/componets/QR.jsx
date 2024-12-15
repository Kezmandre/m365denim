import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useLocation, useNavigate } from "react-router-dom";

const QR = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userDetails } = location.state || {};

  if (!userDetails) {
    navigate("/register");
    return null;
  }

  const { firstName, lastName } = userDetails;

  // Create the URL with user details as query parameters
  const qrUrl = `/profile?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;

  const downloadeQrCode = () => {
    const svg = document.getElementById("qr-gen");
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml; charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);
    const link = document.createElement("a");
    link.href = svgUrl;
    link.download = `${firstName}-${lastName}-QRCode.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-[300px] h-auto mx-auto mt-8 bg-white rounded-xl shadow-2xl">
      <div className="w-full">
        <h2 className="text-center py-4 italic font-semibold">{`Hi! ${firstName} ${lastName}`}</h2>
        <h2 className="text-center px-3 pb-4">Download the QRcode as your Gate pass</h2>
        {/* QR code will now encode the URL with user details as query parameters */}
        <QRCodeSVG id="qr-gen" value={qrUrl} className="mx-auto py-4" size={250} />
        <div className="w-[200px] mx-auto">
          <button
            onClick={downloadeQrCode}
            className="w-full bg-green-300 rounded-lg text-semibold mb-3"
          >
            Download QRCode
          </button>
        </div>
      </div>
    </div>
  );
};

export default QR;
