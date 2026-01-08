import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1 className="text-4xl font-bold">Oops !</h1>
      <p>{error?.statusText || error?.message || "Something went wrong."}</p>
      {error.status === 404 && (
        <Link to="/">
          {" "}
          <button>Home</button>
        </Link>
      )}
    </>
  );
};

export default ErrorPage;
