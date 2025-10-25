import React from 'react'
import { Link, useNavigate } from 'react-router';

const Navbar = () => {
  
  const navigate=useNavigate();
  return (
    <div className='bg-gradient-to-t from-white to-[#E7F0FF] pt-5 pb-5'>
      <div className='flex w-[80%] mx-auto justify-between'>
        <div>
          <p>Medify</p>
        </div>
        <ul className='flex gap-10'>
          <Link > <li >Find Doctors</li></Link>
          <Link to='/find-docter'><li>Hospitals</li></Link>
          <Link><li>Medicines</li></Link>
          <Link><li>Surgeries</li></Link>
          <Link> <li>Software for Provider</li></Link>
          <Link> <li>Facilities</li></Link>
        </ul>
        <button className='bg-[#2AA7FF] p-2 rounded-lg w-[8vw] ' onClick={()=>{navigate('/my-bookings')}}>My Bookings</button>
      </div>
    </div>)

}
export default Navbar;