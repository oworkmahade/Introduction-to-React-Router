const User = ({ user }) => {
  console.log(user);
  const { id, name, username, email, address, geo, phone, website, company } =
    user;

  return (
    <div className="border-green-600 border-2 p-4 m-4">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <ul>
        <li>{address.street}</li>
        <li>{address.suite}</li>
        <li>{address.city}</li>
        <li>{address.zipcode}</li>
        <ul>
          <li>{address.geo.lat}</li>
          <li>{address.geo.lng}</li>
        </ul>
      </ul>
    </div>
  );
};

export default User;
