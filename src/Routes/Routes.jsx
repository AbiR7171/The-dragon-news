import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>
    }
])
export default router;