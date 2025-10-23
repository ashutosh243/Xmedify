import React from 'react'
import {HeartPulse,Hospital,BriefcaseMedical} from 'lucide-react';

const News = () => {

    return (
        <div className='bg-[#e7f0ff] flex w-[80vw] items-center justify-center m-auto mt-10'>
            <div className='w-[38vw] h-[500px] flex items-center flex-col justify-center'>
                <p className='uppercase  text-[#2AA7FF]'>caring for the health of you and your family</p>
                <h1 className='text-2xl text-slate-600 font-bold'>Our Families</h1>
                <p className='text-slate-500 mt-2'>
                    We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                </p>
            </div>
            <div className='w-[38vw] h-[500px] flex items-center justify-center gap-7'>
                <div className='flex gap-10 flex-col'>                
                    <div className='w-[10rem] h-[12rem] flex items-center justify-center flex-col shadow-2xl'>
                        <HeartPulse size={90} />
                        <h1 className='font-bold text-xl'>5000+</h1>
                        <p>Happy Patients</p>
                    </div>
                    <div className='w-[10rem] h-[12rem] flex flex-col items-center justify-center shadow-2xl'>
                        <BriefcaseMedical size={90} />
                        <h1 className='font-bold text-xl'>Laboratories</h1>
                    </div>
                </div>

                <div className=' mt-20 flex flex-col gap-10'>                
                    <div className='w-[10rem] h-[12rem] flex items-center justify-center flex-col shadow-2xl'>
                        <Hospital size={90} />
                        <h1 className='font-bold text-xl'>2000+</h1>
                        <p>Hospitals</p>
                    </div>
                    <div className='w-[10rem] h-[12rem] flex flex-col items-center justify-center shadow-2xl'>
                        <BriefcaseMedical size={90} />
                        <h1 className='font-bold text-xl'>Expert Docters</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default News