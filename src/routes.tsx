import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AppLayout from "./AppLayout";
import NotFound from "./NotFound";
import User from "./User";
import ProfileLayout from "./profiles/ProfileLayout";
import Settings from "./profiles/Settings";
import Details from "./profiles/Details";

// The latest to do in react router v6+
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
                path:"user/:userId",
                element:<User/>
            },
            {
                 // localhost:5173/anything-not-found
                path:"*",
                element:<NotFound/>
            },
            {
                path:"profile/:userId",
                element:<ProfileLayout/>,
                children:[
                    {
                        index:true, element:<div>Select a tab(Settins or Details)</div>
                    },
                    {
                     path:"settings", element:<Settings/>,
                    
                    },
                    {
                    path:"details", element:<Details/>
                    }
                ]
            }
        ]
    }
])