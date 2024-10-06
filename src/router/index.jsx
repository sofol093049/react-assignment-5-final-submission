import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Homepage from "../components/Homepage";
import Bookdetails from "../components/Bookdetails";
import Accordian from "../components/Accordian";
import Commonlayout from "../commonlayout/Commonlayout";

import Bookcards from "../components/Bookcards";
import Login from "../components/Login";
import Register from "../components/Register";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
// import { linkWithCredential } from "firebase/auth";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Commonlayout/>,
      children:[ 
        {path:"/",
          element:<Homepage/>,
          loader:()=> fetch('https://bootcamp-assnmnt-4-server.vercel.app/book_data',{
            
          }
            
          
            ),
        },
        {
        path: "/bookdetails/:book_id",
        element:<Bookdetails />,
        loader:()=>fetch('https://bootcamp-assnmnt-4-server.vercel.app/book_data',
         
          
          ),
      },
      {
        path:"/faq/",
        element:<Accordian/>
      },
      {
        path:"/login/",
        element:<Login/>
      },
      {
        path:"/register/",
        element:<Register/>
      },
      {
        path:"/aboutus/",
        element:<Aboutus/>
      },
      {
        path:"/contactus/",
        element:<Contactus/>
      }
    ]
    },
   
   
  ]);