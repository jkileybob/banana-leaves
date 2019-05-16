import React from 'react'
import {Link} from 'react-router-dom'
 const Footer = (props) => {
   return(
     <div className="Footer">
      <Link className='link'to="/home">Home Page</Link>
      <Link className='link'to="/menu">Menu</Link>
      <Link className='link'to="/contact">Contact Us</Link>
      <p>link to fb, ig, twitter</p>
      <h3>Banana Leaves Established in ????</h3>
     </div>
   );
 }

export default Footer
