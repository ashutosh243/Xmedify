import React from 'react'
import patient1 from '../assets/patient.png';
import patient2 from '../assets/patient2.jpg';

const Patient=()=>{
  return (
    <div className='bg-[#e7f0ff]'>
    <div className='container flex w-[80vw] m-auto h-[500px] '>
        <div className='w-[38vw] flex  items-center justify-center relative'>
           <img className='w-[350px] absolute top-5 left-40 border-[5px] border-white' src={patient1} alt="" />
           <img className='w-[350px] absolute top-60 left-20 border-[5px] border-white' src={patient2} alt="" />
        </div>
        <div className='w-[38vw] flex flex-col items-start justify-center'>
            <p className='uppercase text-[#0057ec] font-bold '>helping patients around the globe</p>
            <h1 className=' text-[#0057ec] text-3xl font-bold'><span className="text-slate-900">Patient</span> Caring</h1>
            <p className='text-slate-600 mt-2'>our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will
              allow us to care for you and strive to be the first and best choice for healthcare
            </p>    
            <ul className=' mt-5 flex flex-col gap-2'>
                <li>Stay Updated About Your Health</li>
                <li>Check Your Result Online</li>
                <li>Manage your Appointments</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Patient