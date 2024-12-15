import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

function QRCodePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const qrCodeRef = useRef(null); // Use a ref to directly access the SVG element

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/signup');
    }
  }, [navigate]);

  if (!user) return null;

  const qrUrl = `${window.location.origin}/user/${user.firstName}-${user.lastName}`;

  const handleDownload = () => {
    const svgElement = qrCodeRef.current?.querySelector('svg');
    if (!svgElement) {
      console.error("SVG element not found");
      return;
    }
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'ticket-qrcode.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Your QR Code</h1>
      <div ref={qrCodeRef} className="mb-4">
        <QRCodeSVG value={qrUrl} size={256} />
      </div>
      <button
        onClick={handleDownload}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Download QR Code
      </button>
    </div>
  );
}

export default QRCodePage;
