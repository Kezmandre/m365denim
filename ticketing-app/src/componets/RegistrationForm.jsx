import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userDatabase as initialUserDatabase } from './data'; // Assuming you have user data
import Party from '../images/party.jpeg';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Load the user database from localStorage or fallback to the initial data
  let userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [...initialUserDatabase];

  useEffect(() => {
    // Check for existing registration flag in local storage
    const registrationFlag = localStorage.getItem('userRegistrationFlag');
    if (registrationFlag) {
      setErrorMessage('You have already registered.');
    }
  }, []);

  const handleRegistration = () => {
    // Clear any previous error messages
    setErrorMessage('');

    // Check if both first and last names are provided
    if (!firstName.trim() || !lastName.trim()) {
      setErrorMessage('Both First Name and Last Name are required.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    // Find the matching user in the invitation list
    const matchedUser = userDatabase.find(
      (user) =>
        user.firstName.toLowerCase() === firstName.trim().toLowerCase() &&
        user.lastName.toLowerCase() === lastName.trim().toLowerCase()
    );

    if (!matchedUser) {
      // If user not found, display error message
      setErrorMessage('Name not found in the invitation list.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    // Check if the user has already registered
    if (matchedUser.registered) {
      setErrorMessage('You have already registered.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    // Mark the user as registered (first registration allowed)
    matchedUser.registered = true;

    // Persist the updated userDatabase to localStorage
    localStorage.setItem('userDatabase', JSON.stringify(userDatabase));

    // Set the registration flag in local storage
    localStorage.setItem('userRegistrationFlag', 'true');

    const userDetails = {
      firstName: matchedUser.firstName,
      lastName: matchedUser.lastName,
      timestamp: new Date().toISOString(),
    };

    // Navigate to the QR code page with user details
    navigate('/qrcode', { state: { userDetails } });
  };

  return (
    <div className="w-[400px] mx-auto my-4 overflow-hidden bg-white shadow-2xl rounded-lg">
      <div className="w-full">
        <img
          src={Party}
          alt="Party"
          className="w-full h-[70vh] bg-cover bg-center rounded-t-lg"
        />
      </div>
      <h2 className="p-2 text-xl sm:text-2xl font-semibold font-serif">
        M365 Denim Party. Register Here
      </h2>

      <div>
        <div className="relative mx-auto w-[95%] mt-2">
          {/* ... (input field for first name) */}
        </div>

        <div className="relative mx-auto mt-2 w-[95%]">
          {/* ... (input field for last name) */}
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="text-red-500 mt-1 text-center">
            <p className="text-center italic text-[14px]">{errorMessage}</p>
          </div>
        )}

        <div className="w-[95%] mx-auto">
          <button
            onClick={handleRegistration}
            className="p-2 my-4 w-full bg-black text-white font-semibold rounded-lg outline-none text-xl"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;