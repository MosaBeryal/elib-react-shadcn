import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import RegistrationPage from "@/pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import DashboardLayout from "./layouts/DashboardLayout";
import BooksPage from "@/pages/BooksPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
]);

export default router;
