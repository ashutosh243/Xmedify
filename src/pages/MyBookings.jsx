import React, { useState } from 'react'
import BookingCard from '../component/BookingCard';


const MyBookings=()=> {
  const [data,setData]=useState(JSON.parse(localStorage.getItem('bookings')));
  return (<>
        <h1 className='text-2xl text-center mt-5 mb-5'>My Bookings</h1>
        <div className='w-[80vw] m-auto text-center flex flex-col items-center justify-center p-4 gap-5'>
         
              {
                data?.map((d,index)=>{return <BookingCard key={index} name={d["Hospital Name"]} location={d["State"]} time={d.bookingTime} date={d.bookingDate}></BookingCard>})
              }
            
        </div>
  </>)
}

export default MyBookings;



