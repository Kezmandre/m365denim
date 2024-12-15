import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const location = useLocation();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const firstName = queryParams.get("firstName");
    const lastName = queryParams.get("lastName");

    if (firstName && lastName) {
      setUserDetails({ firstName, lastName });
    }
  }, [location]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

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

export default UserProfile;
