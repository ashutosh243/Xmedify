import React from 'react'
import { Hospital,Bandage,HeartPulse,SquareActivity,Syringe,ShieldCheck,TestTubeDiagonal,Bone} from 'lucide-react'

const Specialisation = () => {

    return (<>
        <div className='bg-[#e7f0ff] flex flex-col  items-center justify-center'>
            <h2 className='font-bold text-3xl m-5 text-[#2AA7FF]'>Find By Specialisation</h2>
            <div className='container grid grid-cols-4 gap-5  w-[80vw]'>
                <div className=" h-[150px] bg-white text-center flex flex-col items-center justify-center shadow-md
                    border-2 hover:border-blue-500 hover:cursor-pointer">
                        <Hospital size={52} />
                        Dentistry</div>
                <div className="bg-white text-center flex flex-col items-center justify-center shadow-md
                     border-2 hover:border-blue-500 hover:cursor-pointer">
                        <Bandage size={52} />
                        Primary Care
                </div>
                <div className="bg-white text-center flex flex-col items-center justify-center shadow-md
                     border-2 hover:border-blue-500 hover:cursor-pointer">
                        <HeartPulse size={52} />
                        Cardiology
                </div>
                <div className=" bg-white text-center flex flex-col items-center justify-center shadow-md
                     border-2 hover:border-blue-500 hover:cursor-pointer">
                       <SquareActivity size={52} />
                        MRI Resonance
                </div>
                <div className="h-[150px] bg-white text-center flex flex-col items-center justify-center shadow-md
                     border-2 hover:border-blue-500 hover:cursor-pointer">
                        <Syringe size={52} />
                        Blood Test
                </div>
                <div className=" bg-white text-center flex flex-col items-center justify-center shadow-md
                     border-2 hover:border-blue-500 hover:cursor-pointer">
                        <ShieldCheck size={52} />
                        Piscologist
                </div>
                <div className="bg-white text-center flex flex-col items-center justify-center shadow-md
                     border-2 hover:border-blue-500 hover:cursor-pointer">
                        <TestTubeDiagonal size={52} />
                        Laboratory
                </div>
                <div className=" bg-white text-center flex flex-col items-center justify-center shadow-md
                     border-2 hover:border-blue-500 hover:cursor-pointer">
                        <Bone size={52} />
                        X-Ray
                </div>
            </div>
            <button className='w-[10rem] bg-[#2AA7FF] m-5 p-2 rounded-md '>view all</button>
        </div>


    </>)
}

export default Specialisation