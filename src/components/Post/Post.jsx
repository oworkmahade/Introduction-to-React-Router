import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const { userId, id, title, body } = post;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="max-w-lg mx-auto border border-slate-300 rounded-xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300 h-[400px] flex flex-col">
      <div className="flex-grow">
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-slate-700 bg-slate-200 rounded-full">
          Post #{id}
        </span>
        <h1 className="text-xl font-bold text-slate-800 mb-3 leading-snug">
          {title}
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
          {body}
        </p>
      </div>

      <div>
        {/* button link  */}
        <Link className="mt-2" to={`/post/${id}`}>
          <button className="bg-slate-400 w-full p-2 m-2 rounded-2xl">
            Details
          </button>
        </Link>
        {/* Link */}
        <Link
          to={`/post/${id}`}
          className="mt-3 ml-4 inline-flex items-center gap-2
    px-4 py-2 rounded-full
    text-sm font-semibold text-indigo-600
    bg-indigo-50
    hover:bg-indigo-100 hover:text-indigo-800
    transition-all duration-300
    group"
        >
          <span>Details</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>

        {/* onClick Navigation */}
        <button
          onClick={handleShowDetails}
          className="mt-5 px-5 py-3 rounded-2xl
    bg-gradient-to-r from-pink-500 to-purple-600
    text-white font-semibold tracking-wide
    shadow-lg
    hover:shadow-2xl hover:scale-105
    active:scale-95
    transition-all duration-300
    relative overflow-hidden"
        >
          <span className="relative z-10">Click Details</span>
          <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300"></span>
        </button>
      </div>
    </div>
  );
};

export default Post;
