import React from 'react'
import hero from '../assets/Hero.png';
import SearchTab from './SearchTab';

const Hero=()=> {
  return (<>
     <div className="container flex flex-col  bg-gradient-to-b from-white to-[#E7F0FF] h-[80vh]">
        <div className='flex items-center justify-center h-[55vh] w-full gap-5'>        
            <div>
                <p className='text-3xl'>Skip the travel! Find Online</p>
                <h1 className='text-5xl font-bold'>Medical<span className='text-[#2AA7FF]'>Centers</span></h1>
                <p className='text-slate-500 text-2xl'>Connect instantly with a 24x7 specialist or choose to</p> 
                <p className='text-xl text-slate-500'>video visit a particular doctor.</p>
            </div>
            <div >
                <img className='h-80' src={hero} alt="" />
            </div>
        </div>
     </div>
    <SearchTab></SearchTab>
   
  </>)
}

export default Hero;