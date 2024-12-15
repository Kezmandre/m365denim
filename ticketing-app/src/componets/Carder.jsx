import { useParams } from "react-router-dom";
import { userDatabase } from "./data";

export default function UserCardPage() {
  const { userName } = useParams();
  const [firstName, lastName] = userName.split("-");
  
  const user = userDatabase.find(
    (user) => user.firstName.toLowerCase() === firstName && user.lastName.toLowerCase() === lastName
  );

  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Our Denim Party!</h1>
      <p className="text-lg mb-8">Hello, {user.firstName} {user.lastName}!</p>
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold">Your Details:</h2>
        <p>Name: {user.firstName} {user.lastName}</p>
      </div>
    </div>
  );
}
