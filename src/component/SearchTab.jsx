import React from 'react'
import {Hospital,Pill,Ambulance,TestTubes,ClipboardPlus} from 'lucide-react';

const SearchTab=()=> {
  return (<>
     <div className='w-[70vw] bg-white  shadow-lg h-[300px] relative top-[-200px] left-[15vw] rounded-xl'>
            <div className='flex gap-6 items-center justify-center p-5 absolute top-[10px]  w-[40vw] left-[15vw]'>
                <input className='bg-slate-100 p-2 text-center' type="search" placeholder='state' />
                <input className='bg-slate-100 p-2 text-center'type="search" placeholder='city'/>
                <button className='bg-[#2AA7FF] p-2 rounded-lg w-[8vw]'>Search</button>
            </div>
            <div className='w-[60vw] absolute top-[120px] left-[5vw] flex flex-col gap-5'>
                <div className='text-center text-xl '>
                    <h1>you may be looking for</h1>
                </div>
                <div className='flex gap-10 h-[110px] items-center justify-center'>
                    <div className=' w-[90px] h-[90px]  bg-slate-100 text-center flex flex-col items-center justify-center shadow-md
                     border-2 hover:border-blue-500 hover:cursor-pointer'>
                        <ClipboardPlus />
                        Doctors
                    </div>
                    <div className='w-[90px] h-[90px]  bg-slate-100 text-center flex flex-col items-center justify-center shadow-md
                    border-2 hover:border-blue-500 hover:cursor-pointer'>
                        <TestTubes />
                        Labs
                    </div>
                    <div className='w-[90px] h-[90px]  bg-slate-100 text-center flex flex-col items-center justify-center shadow-md
                    border-2 hover:border-blue-500 hover:cursor-pointer'>
                        <Hospital />
                        Hospitals
                    </div>
                    <div className='w-[90px] h-[90px]  bg-slate-100 text-center flex flex-col items-center justify-center shadow-md
                    border-2 hover:border-blue-500 hover:cursor-pointer'>
                        <Pill />
                        Medical Store
                    </div>
                    <div className='w-[90px] h-[90px]  bg-slate-100 text-center flex flex-col items-center justify-center shadow-md
                    border-2 hover:border-blue-500 hover:cursor-pointer'>
                        <Ambulance />
                        Ambulance
                    </div>
                </div>
            </div>
    </div>
  </>)
}

export default SearchTab