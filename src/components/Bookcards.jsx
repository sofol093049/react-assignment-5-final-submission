
import { Link } from "react-router-dom";
// import Book from "./Book";
//  import Bookdetails from "./Bookdetails";
 import { useEffect, useState } from "react";

function Bookcards() {
    
    const [books,setBooks]=useState([]);
    useEffect(()=>{fetch("book.json")
      .then(res=>res.json())
      .then(books=>setBooks(books));
    })
    return (
        <div>
            <h2 className="bg-amber-100 navbar_width mx-auto mt-4 text-center rounded font-bold text-2xl">ℭ𝔞𝔱𝔢𝔤𝔬𝔯𝔶 𝔒𝔣 𝔅𝔬𝔬𝔨𝔰</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 navbar_width mx-auto mt-4" >
            
         {books.map((book)=>{
            return (<div key={book.bookId} className="bg-slate-200 p-3 shadow rounded border-red-100 text-center">
                {/* <span className="absolute top-0 right-0 bg-orange-400 py-3 rounded">10%</span> */}
                <img  className="h-32 mx-auto" src={book.image}
                alt="" />
                <p title={book.bookName}></p>
                <p className="  font-mono font-bold">{book.bookName.slice(0,10)}</p>
                
                
                <p className="  font-mono font-bold">{book.tags.slice(0,10)}</p>
                <p className="  font-mono font-bold">{book.ratings}</p>
                <p className="  font-mono font-bold">{book.category}</p>
               <Link to={`/bookdetails/${book.bookId}`}> <button type="button"  className="btn-secondary btn hover:bg-sky-700">
               𝘉𝘰𝘰𝘬 𝘋𝘦𝘵𝘢𝘪𝘭𝘴</button></Link>
               
            
            </div>
            )
         })}
        </div>
               
            {/* <Bookdetails name={books}/> */}
        </div>
       
    
    );
}

export default Bookcards;