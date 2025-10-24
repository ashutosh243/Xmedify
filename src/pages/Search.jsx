import { Axis3DIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HospitalCard from '../component/HospitalCard.';

const Search = () => {

    const [selectedData, setSelectedData] = useState({ state: "", city: "" });
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [data, setData] = useState();

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
    return (<>
        <div className="relative w-full h-[20vh] flex justify-center">
            <div className="bg-[#2AA7FF] h-[15vh] w-[99.5vw] rounded-lg z-10"></div>
            <div className="absolute top-[10vh] w-[80vw] h-[5vw] flex items-center justify-center gap-12 shadow-lg rounded-md bg-white z-20">
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
        </div>
        <div className="container flex items-center justify-center flex-col mt-10">
            <h1 className='text-2xl '>{data?.length} medical centers available in {selectedData.city}</h1>
            {data?.map((data) => { return <HospitalCard name={data["Hospital Name"]} address={data["Address"]} type={data["Hospital Type"]}></HospitalCard> })}
        </div>
    </>);
};

export default Search;
