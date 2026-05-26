import "./App.css";
// PERHATIKAN BAGIAN INI: Sudah saya ubah jadi huruf kecil semua (signin, signup, error)
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ErrorPage from "./pages/error";
import DashboardPage from "./pages/dashboard";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,   
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