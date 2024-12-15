import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userDatabase } from './data';

const SignUpPage=()=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidUser = userDatabase.some(
      (user) => user.firstName === firstName && user.lastName === lastName
    );

    if (!isValidUser) {
      setError('Name not found in our records. Please try again.');
      return;
    }

    const user = { firstName, lastName };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/qrcode');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form className="w-80 bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Generate QR Code
        </button>
      </form>
    </div>
  );
}

export default SignUpPage
