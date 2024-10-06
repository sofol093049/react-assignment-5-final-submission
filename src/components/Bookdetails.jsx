
// import { useEffect, useState } from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
// import data from "./nbook.json";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
//  import Book from "./Book";

// import books from './nbook.json';
function Bookdetails() {
    const navigate=useNavigate();
    const {user}=useContext(AuthContext);
    console.log("user:",user);
    // const[userc,setUserc]=useState([]);
    // useEffect(()=>{
       

    //     setUserc(user);
    //     if(user==null){
    //         console.log(user);
    //         navigate("/");
    //     }
    // },[])
  const books=useLoaderData();
var  {book_id}  = useParams();
console.log("book_id:",book_id);
console.log(book_id);
    const result = books.filter(checkAdult);
   
function checkAdult(b) {
  return b._id==book_id;
}
    // console.log(result);
    function alert_function_wishlist(value1,value2){
       alert(`"Course id:"${value1},"and Course Name:"${value2},"is successfully added to your wishlist"`);
    }
    function alert_function_cart(value1,value2){
        alert(`"Course id:"${value1},"and Course Name:"${value2},"is successfully added to your cart"`);
     }
    return (
        
        <section>
            {user?(<div><div className="grid grid-cols-1 sm:grid-cols-10 navbar_width mx-auto mt-5 bg-amber-100 shadow-2xl">
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓘𝓶𝓪𝓰𝓮</p><img className='h-28 mt-4' src={result[0].img_url} alt="" /></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200 '><p >𝓒𝓸𝓾𝓻𝓼𝓮 𝓣𝓲𝓽𝓵𝓮</p><p className='text-lg text-center hover:text-orange-400 font-bold '>{result[0].title}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓐𝓾𝓽𝓱𝓸𝓻</p><p  className='text-lg mt-7 hover:text-orange-400 font-bold '>{result[0].author}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓒𝓪𝓽𝓮𝓰𝓸𝓻𝔂</p><p  className='text-lg mt-7 hover:text-orange-400 font-bold'>{result[0].level}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200 '><p>𝓡𝓮𝓿𝓲𝓮𝔀</p><p className='text-lg mt-7 hover:text-orange-400 font-bold'>{result[0].ratings}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><span>𝓛𝓮𝓼𝓼𝓸𝓷</span><p  className='text-lg mt-7 hover:text-orange-400 font-bold'>{result[0].lession}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓽𝓸𝓽𝓪𝓵 𝓼𝓽𝓾𝓭𝓮𝓷𝓽</p><p  className='text-lg mt-4 hover:text-orange-400 font-bold'>{result[0].student}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓽𝓸𝓽𝓪𝓵 𝓬𝓸𝓼𝓽</p><p  className='text-lg mt-7 hover:text-orange-400 font-bold'>{result[0].price}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓒𝓸𝓾𝓻𝓼𝓮 𝓓𝓾𝓻𝓪𝓽𝓲𝓸𝓷</p><p  className='text-lg mt-7 hover:text-orange-400 font-bold'>{result[0].duration}</p></div>
        <div className='text-wrap single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓐𝓼𝓼𝓮𝓼𝓼𝓶𝓮𝓷𝓽 𝓣𝔂𝓹𝓮</p><p  className='text-wrap mt-4 hover:text-orange-400 font-bold'>{result[0].assessments}</p></div>
        </div>
  <div className='flex flex-row justify-center gap-4 mt-5'>
  <div><button className='btn text-lg font-bold hover:bg-orange-300' onClick={()=>alert_function_wishlist(result[0]._id,result[0].title)}>𝓦𝓲𝓼𝓱 𝓽𝓸 𝓐𝓭𝓶𝓲𝓽</button></div>
  <div><button className='btn text-lg font-bold hover:bg-orange-300'onClick={()=>alert_function_cart(result[0]._id,result[0].title)}>𝓐𝓭𝓭 𝓽𝓸 𝓒𝓪𝓻𝓽</button></div>
  </div></div>):(<div className='text-center'><Link to="/login/"> <button className='btn mt-5 '> <span className='text-orange-500 font-bold'>Please Login To Continue</span></button></Link>
   </div>)}
       
        
        
       </section>
    );
}

export default Bookdetails;