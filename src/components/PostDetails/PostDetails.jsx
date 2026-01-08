import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { postId } = useParams();
  console.log("postId (using params hook) : ", postId);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-8 relative">
        {/* Badge */}
        <span className="absolute -top-3 left-6 bg-slate-800 text-white text-xs px-3 py-1 rounded-full">
          Post #{id}
        </span>

        {/* Title */}
        <h1 className="mt-4 text-2xl font-bold text-slate-800 leading-snug">
          {title}
        </h1>

        {/* Divider */}
        <div className="w-16 h-1 bg-slate-400 rounded-full my-4"></div>

        {/* Body */}
        <p className="text-slate-600 leading-relaxed text-sm">{body}</p>

        {/* Action */}
        <button
          onClick={handleGoBack}
          className="mt-6 inline-block bg-slate-800 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
