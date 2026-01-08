import { useLoaderData, useParams } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, phone, website } = user;

  const { userId } = useParams();
  console.log(userId);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300 p-6 my-8">
      <h1 className="text-xl font-bold text-gray-800 mb-2">
        Details about user: {name}
      </h1>
      <p className="text-gray-600 mb-4">
        Website:{" "}
        <a
          href={website}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      </p>
    </div>
  );
};

export default UserDetails;
