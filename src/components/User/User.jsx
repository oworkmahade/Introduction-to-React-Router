import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, email, address, geo, phone, website, company } =
    user;

  return (
    <div className="max-w-md mx-auto m-4 bg-white rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition duration-300">
      <div className="border-b border-green-500 p-8">
        <h1 className="text-xl font-bold text-green-700">{name}</h1>
        <p className="text-sm text-gray-600">{email}</p>
        <p className="text-sm text-gray-600">{phone}</p>
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-md font-semibold text-green-600">📍 Address</h2>

        <ul className="text-sm text-gray-700 space-y-1">
          <li>
            <span className="font-medium">Street:</span> {address.street}
          </li>
          <li>
            <span className="font-medium">Suite:</span> {address.suite}
          </li>
          <li>
            <span className="font-medium">City:</span> {address.city}
          </li>
          <li>
            <span className="font-medium">Zip:</span> {address.zipcode}
          </li>
        </ul>

        <div className="bg-green-50 rounded-lg p-3">
          <h3 className="text-sm font-semibold text-green-700">
            🌐 Geo Location
          </h3>
          <p className="text-xs text-gray-600">Latitude: {address.geo.lat}</p>
          <p className="text-xs text-gray-600">Longitude: {address.geo.lng}</p>
        </div>
      </div>

      {/* dynamic route  */}
      <div className="font-bold p-6">
        <Link to={`/user/${id}`}>
          <button>Show Details</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
