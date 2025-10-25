import React from 'react'
import {Route, Routes} from 'react-router';
import Home from '../pages/Home';
import Search from '../pages/Search';
import MyBookings from '../pages/MyBookings';


const Routing=()=> {
  return (<>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/find-docter' element={<Search></Search>}></Route>
        <Route path='/my-bookings' element={<MyBookings/>}></Route>
     </Routes>
  </>)
}

export default Routing;