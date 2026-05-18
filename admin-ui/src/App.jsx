import "./App.css";
// PERHATIKAN BAGIAN INI: Sudah saya ubah jadi huruf kecil semua (signin, signup, error)
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ErrorPage from "./pages/error";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-[#299d91] text-white rounded">
            Login
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-[#299d91] text-white rounded">
            Register
          </Link>
        </div>
      ),
      errorElement: <ErrorPage />,
    },

    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;