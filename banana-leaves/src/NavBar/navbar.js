import React from 'react'
import {Link} from 'react-router-dom'

 const Navbar = (props) => {
   return(
     <div className="Navbar">
       <ul className="ul">
         <li className="li li-link"><h1 id="navbar-logo">Banana Leaves</h1></li>
         <li className="li li-link"><Link className='link'to="/home">Home Page</Link></li>
         <li className="li li-link"><Link className='link'to="/menu">Menu</Link></li>
         <li className="li li-link"><Link className='link'to="/contact">Contact Us</Link></li>
         <li className="li li-link"><Link className='link'to="/about">About</Link></li>
      </ul>

     </div>
   );
 }

export default Navbar
