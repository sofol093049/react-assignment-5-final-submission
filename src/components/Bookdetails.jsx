
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import data from "./nbook.json";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
//  import Book from "./Book";

import books from './nbook.json';
function Bookdetails() {
  
var  {book_id}  = useParams();
console.log(book_id);
    const result = books.filter(checkAdult);
   
function checkAdult(b) {
  return b.bookId==book_id;
}
    // console.log(result);
    function alert_function_wishlist(value1,value2){
       alert(`"Book id:"${value1},"and Book Name:"${value2},"is successfully added to your wishlist"`);
    }
    function alert_function_cart(value1,value2){
        alert(`"Book id:"${value1},"and Book Name:"${value2},"is successfully added to your cart"`);
     }
    return (
        <section>
       <div className="grid grid-cols-1 sm:grid-cols-10 navbar_width mx-auto mt-5 bg-amber-100 shadow-2xl">
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓘𝓶𝓪𝓰𝓮</p><img className='h-28 mt-4' src={result[0].image} alt="" /></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓑𝓸𝓸𝓴 𝓝𝓪𝓶𝓮</p><p className='text-lg hover:text-orange-400 font-bold'>{result[0].bookName}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓐𝓾𝓽𝓱𝓸𝓻</p><p  className='text-lg hover:text-orange-400 font-bold'>{result[0].author}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓒𝓪𝓽𝓮𝓰𝓸𝓻𝔂</p><p  className='text-lg hover:text-orange-400 font-bold'>{result[0].category}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200 '><p>𝓡𝓮𝓿𝓲𝓮𝔀</p><p className='text-lg hover:text-orange-400 font-bold'>{result[0].review}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><span>𝓣𝓪𝓰𝓼</span><p  className='text-lg hover:text-orange-400 font-bold'>{result[0].tags[0]}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓣𝓸𝓽𝓪𝓵𝓟𝓪𝓰𝓮𝓼</p><p  className='text-lg hover:text-orange-400 font-bold'>{result[0].totalPages}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓟𝓾𝓫𝓵𝓲𝓼𝓱𝓮𝓻</p><p  className='text-lg hover:text-orange-400 font-bold'>{result[0].publisher}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓨𝓮𝓪𝓻 𝓸𝓯 𝓟𝓾𝓫𝓵𝓲𝓼𝓱𝓲𝓷𝓰</p><p  className='text-lg hover:text-orange-400 font-bold'>{result[0].yearOfPublishing}</p></div>
        <div className='single_book_page text-center shadow-lg hover:bg-orange-200'><p>𝓡𝓪𝓽𝓲𝓷𝓰</p><p  className='text-lg hover:text-orange-400 font-bold'>{result[0].rating}</p></div>
        </div>
  <div className='flex flex-row justify-center gap-4 mt-5'>
  <div><button className='btn text-lg font-bold hover:bg-orange-300' onClick={()=>alert_function_wishlist(result[0].bookId,result[0].bookName)}>𝓦𝓲𝓼𝓱 𝓽𝓸 𝓡𝓮𝓪𝓭</button></div>
  <div><button className='btn text-lg font-bold hover:bg-orange-300'onClick={()=>alert_function_cart(result[0].bookId,result[0].bookName)}>𝓐𝓭𝓭 𝓽𝓸 𝓒𝓪𝓻𝓽</button></div>
  </div>
        
        
       </section>
    );
}

export default Bookdetails;