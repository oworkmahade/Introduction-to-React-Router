🚀 React SPA with React Router

A Single Page Application (SPA) built with React and React Router DOM, demonstrating routing, dynamic pages, loaders, navigation, and error handling.

🌟 Features

🏠 SPA architecture

🔗 Nested routes (<Outlet />)

🎯 Dynamic routes with URL params

📦 Route-based data loading (loader)

🧭 Programmatic navigation (useNavigate)

✨ Active link styling (NavLink)

⏳ Loading state during route changes

❌ 404 / error handling

🗂 Structure

main.jsx – Route setup

components/ – Header, Footer, Home, About, Contact, Users, User, UserDetails, Post, PostDetails, ErrorPage

Posts/ – Posts list page

🔀 Routing

/ → Home layout

/about → About

/contact → Contact

/users → Users list

/user/:userId → Single user (dynamic)

/posts → Posts list

/post/:postId → Single post (dynamic)

🪝 Hooks

🔴 useLoaderData() – Route loader data

🔴 useParams() – Dynamic URL params

🔴 useNavigate() – Programmatic navigation

🔴 useNavigation() – Loading state detection

🔴 useLocation() – Current URL info

🔑 Concepts

🧩 Nested Routes

🎯 Dynamic Data Loading

🏃 Programmatic Navigation

⏳ Loading State

❌ Error Handling

🌐 API

JSONPlaceholder – Users & Posts

✅ Summary

A complete React SPA demonstrating routing, dynamic pages, loaders, navigation, and error handling, perfect for learning, interviews, and portfolio projects.
