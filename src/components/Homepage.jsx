import React from 'react';
import Navbar from './shared/Navbar';
import Banner from './Banner';
// import Bookcards from './components/Bookcards';
import Book from './Book';

import Bookcards from './Bookcards';
// import Bookdetails from './Bookdetails';
import Datafetch from './Datafetch';
// import Bookcards from './src/components/Bookcards'


function Homepage(props) {
    return (
        <div>
            
            <Banner/>
            <Bookcards/>
            <Book/>
           
            
            
          
        </div>
        
    );
}

export default Homepage;