import React from 'react'

const Navbar=()=>{
  
    return(  <div className='bg-gradient-to-t from-white to-[#E7F0FF] pt-5 pb-5'>
            <div className='flex w-[80%] mx-auto justify-between'>
                    <div>
                      <p>Medify</p>
                    </div>
                    <ul className='flex gap-10'>
                        <li>Find Doctors</li>
                        <li>Hospitals</li>
                        <li>Medicines</li>
                        <li>Surgeries</li>
                        <li>Software for Provider</li>
                        <li>Facilities</li>
                    </ul>
                    <button className='bg-[#2AA7FF] p-2 rounded-lg w-[8vw] '>My Bookings</button>
                </div>
        </div>)

}
export default Navbar;