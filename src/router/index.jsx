import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Homepage from "../components/Homepage";
import Bookdetails from "../components/Bookdetails";
import Accordian from "../components/Accordian";
import Commonlayout from "../commonlayout/Commonlayout";
import Datafetch from "../components/Datafetch";
import Bookcards from "../components/Bookcards";
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Commonlayout/>,
      children:[ 
        {path:"/",
          element:<Homepage/>
        },
        {
        path: "/bookdetails/:book_id",
        element:<Bookdetails />
      },
      {
        path:"/faq/",
        element:<Accordian/>
      }]
    },
   
   
  ]);