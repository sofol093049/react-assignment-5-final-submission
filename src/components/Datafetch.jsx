
import { useEffect, useState } from "react";
import Bookdetails from "./Bookdetails";

function Datafetch(props) {
    const [books,setBooks]=useState([]);
    useEffect(()=>{fetch('book.json')
      .then(res=>res.json())
      .then(books=>setBooks(books));
    })
    return (
        
        <div>
            <Bookdetails name={books}/>
        </div>
    );
}

export default Datafetch;