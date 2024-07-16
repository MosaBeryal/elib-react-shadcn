import { createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import RegistrationPage from "@/pages/RegistrationPage"
import HomePage from "./pages/HomePage"


const router = createBrowserRouter(
    [
     {
        path:"/",
        element: <HomePage/>,
     },
        {
            path: '/login',
            element: <Login/>,
        },
        {
            path: '/registration',
            element: <RegistrationPage/>,
        }
        
    ]
)

export default router