import React from 'react'
import {Route, Routes} from 'react-router';
import Home from '../pages/Home';
import Search from '../pages/Search';


const Routing=()=> {

  return (<>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/find-docter' element={<Search></Search>}></Route>
        <Route path='/my-bookings' element={<><h1>booking</h1></>}></Route>
     </Routes>
    
  </>)
}

export default Routing;