import React, { useState,} from "react";
import { useNavigate } from "react-router-dom";
import { userDatabase } from "./data"; // Assuming you have user data
import Party from "../images/party.jpeg";

const RegistrationForm = () => {
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
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
            placeholder="John"
            autoComplete="off"
          />
          <label
            htmlFor="firstName"
            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none px-2 text-sm bg-white font-semibold text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-green-600"
          >
            Enter Your First Name
          </label>
        </div>

        <div className="relative mx-auto mt-2 w-[95%]">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
            placeholder="Doe"
            autoComplete="off"
          />
          <label
            htmlFor="lastName"
            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none px-2 text-sm bg-white font-semibold text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-green-600"
          >
            Enter Your Last Name
          </label>
        </div>

        {/* Error message */}
        {error && (
          <div className="text-red-500 mt-1 text-center">
            <p className="text-center italic text-[14px]">{error}</p>
          </div>
        )}

        <div className="w-[95%] mx-auto">
          <button
            onClick={handleSubmit}
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
