import React from 'react'
 import { Link } from 'react-router-dom';

const Navbar : React.FC= () => {
  return (
    <div>
     <div className=' flex lg:flex-col flex-row lg:gap-20 gap-2 font-serif font-bold lg:text-xl text-sm text-black '>
      <button className="hover:underline p-o lg:p-2 bg-blue-400"> <Link to="/" >Home</Link></button>
      <button className="hover:underline lg:p-2 bg-blue-400"> <Link to="/about" >About us </Link></button>
      <button className="hover:underline lg:p-2 bg-blue-400">Education</button>
      <button className="hover:underline lg:p-2 bg-blue-400">contact us</button>
      <button className="hover:underline lg:p-2 bg-blue-400">Projects</button>
     </div>
    </div>
  )
}

export default Navbar
