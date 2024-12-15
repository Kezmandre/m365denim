import { useParams } from 'react-router-dom';

function UserCardPage() {
  const { id } = useParams();
  const [firstName, lastName] = id.split('-');

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Denim Party!</h1>
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-2">{`${firstName} ${lastName}`}</h2>
        <p className="text-lg">We are excited to have you here!</p>
      </div>
    </div>
  );
}

export default UserCardPage;
