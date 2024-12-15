import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

const QRCodeScanner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize the QR Code scanner
    const scanner = new Html5QrcodeScanner("qr-scanner", {
      fps: 10, // Frames per second
      qrbox: 250, // Size of the QR scanning box
    });

    // Handle successful scan
    const handleScanSuccess = (decodedText) => {
      console.log("Decoded text:", decodedText);

      // Navigate to the scanned URL
      navigate(decodedText);
    };

    // Start the scanner
    scanner.render(handleScanSuccess, (errorMessage) => {
      console.warn("Scan failed", errorMessage);
    });

    // Cleanup on unmount
    return () => {
      scanner.clear().catch((error) => {
        console.error("Failed to clear QR scanner", error);
      });
    };
  }, [navigate]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-center text-xl font-semibold mb-4">Scan QR Code</h2>
      <div id="qr-scanner" className="w-[300px] h-[300px]"></div>
    </div>
  );
};

export default QRCodeScanner;
