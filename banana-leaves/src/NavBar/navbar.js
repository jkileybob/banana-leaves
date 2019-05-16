import React from 'react'
import {Link} from 'react-router-dom'
 const Navbar = (props) => {
   return(
     <div className="Navbar">
      <h1>Banana Leaves</h1>
      <Link className='link'to="/home">Home Page</Link>
      <Link className='link'to="/menu">Menu</Link>
      <Link className='link'to="/contact">Contact Us</Link>
      <Link className='link'to="/about">About</Link>

     </div>
   );
 }

export default Navbar
