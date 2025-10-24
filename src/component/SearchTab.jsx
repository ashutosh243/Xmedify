import React from 'react'
import { Hospital, Pill, Ambulance, TestTubes, ClipboardPlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HospitalCard from './HospitalCard.';


const SearchTab = () => {

    const [selectedData, setSelectedData] = useState({ state: "", city: "" });
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function findState() {
            const response = await axios.get('https://meddata-backend.onrender.com/states');
            setState(() => { return response.data });
        }
        findState();
    }, []);
    useEffect(() => {
        async function getCity() {
            const response = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedData.state}`);
            setCity(() => { return response.data });
        }
        getCity();
    }, [selectedData.state]);
    const handleChange = (e) => {
        setSelectedData((prev) => { return { ...prev, [e.target.name]: e.target.value } })
    }
    const handleClick = async () => {

        const response = await axios.get(`https://meddata-backend.onrender.com/data?state=${selectedData.state}&city=${selectedData.city}`);
        setData(() => { return response.data });
    }
    console.log(data);
    return (<>
        <div className='w-[70vw] bg-white  shadow-lg min-h-[300px] relative top-[-200px] left-[15vw] rounded-xl'>
            <div className='flex gap-6 items-center justify-center p-5 absolute top-[10px]  w-[40vw] left-[15vw]'>
                <div id='state'>
                    <select name='state' className=" w-[15vw] h-[3vw] border rounded-md px-2" id="state" onChange={handleChange}>
                        <option value="">State</option>
                        {
                            state?.map((data) => { return <option value={data}>{data}</option> })
                        }
                    </select>
                </div>
                <div id='city'>
                    <select name='city' className="w-[15vw] h-[3vw] border rounded-md px-2" id="city" onChange={handleChange}>
                        <option value="">City</option>
                        {city?.map((data) => { return <option value={data}>{data}</option> })}
                    </select>
                </div>
                <button id="    searchBtn" type="submit" className="bg-[#2AA7FF] text-white px-6 py-2 rounded-md hover:bg-blue-500" onClick={handleClick}>
                    Search
                </button>
            </div>
            {data?.length === 0 && <div className='w-[60vw] absolute top-[120px] left-[5vw] flex flex-col gap-5'>
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
            </div>}
            {data?.length!==0&&<div className="container flex items-center justify-center flex-col">
               <div className='mt-20 p-5'>
                 <h1 className='text-2xl '>{data?.length} medical centers available in {selectedData.city}</h1>
                 {data?.map((data) => { return <HospitalCard name={data["Hospital Name"]} address={data["Address"]} type={data["Hospital Type"]}></HospitalCard> })}
                </div> 
            </div>}
        </div>
    </>)
}

export default SearchTab