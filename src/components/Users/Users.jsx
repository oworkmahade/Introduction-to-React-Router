import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <>
      <div>
        <h1 className="font-bold">Users !</h1>
        <h1>Our Users: {users.length}</h1>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-4">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </>
  );
};

export default Users;
