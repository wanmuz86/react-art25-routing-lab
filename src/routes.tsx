import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
export const router = createBrowserRouter([
 
    {
        path:"/",
        element:<AppLayout/>, // The base path or layout,
        children: [
            {
                // localhost:5173
                //path:"",
                index:true, //equivalent to path:""
                element:<Home/> 
            },
            {
                 // localhost:5173/about
                path:"about",
                element:<About/>
            },
            {
                 // localhost:5173/anything-not-found
                path:"*",
                element:<NotFound/>
            }
        ]
    }
])