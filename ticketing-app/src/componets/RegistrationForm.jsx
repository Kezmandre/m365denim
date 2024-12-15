import { useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // Import QRCodeSVG from qrcode.react

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const handleSignUp = () => {
    // Generate the user URL based on the first and last name
    const userUrl = `/user/${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
    setQrCodeUrl(userUrl);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-6">Sign Up</h1>
      <input
        type="text"
        placeholder="First Name"
        className="mb-4 px-4 py-2 border rounded"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="mb-4 px-4 py-2 border rounded"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button
        onClick={handleSignUp}
        className="px-6 py-3 bg-blue-500 text-white rounded-full"
      >
        Sign Up
      </button>

      {qrCodeUrl && (
        <div className="mt-6">
          {/* Render QR Code as SVG using QRCodeSVG */}
          <QRCodeSVG value={qrCodeUrl} size={256} />
        </div>
      )}
    </div>
  );
}
