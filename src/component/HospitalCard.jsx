import React, { useState } from "react";
import { MapPin, Hospital, CalendarDays, Clock } from "lucide-react";




const HospitalCard = ({ name, address, type }) => {
    const [open, setOpen] = useState(false);
    const [BookingData,setBookingData]=useState();


    const timeSlots = {
        morning: ["11:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
        evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
    };
    const handleClick=(slot,name,address,type)=>{
        
        const BookingData={
            "Hospital Name":name,
            "State":address,
            "slot":slot,
            "Hospital Type":type,
            bookingTime:new Date().toLocaleDateString(),
            bookingDate:new Date().toLocaleTimeString()
        };
        setBookingData(BookingData);
    }
    const handleBooking=()=>{
        
        const localData=JSON.parse(localStorage.getItem('bookings'));
        if(localData)
        {
            localData.push(BookingData)
            localStorage.setItem('bookings',JSON.stringify(localData));
        }
        else
        {
          localStorage.setItem('bookings',JSON.stringify([BookingData]));
        }
    }

    return (
        <div className="w-[90%] max-w-3xl mx-auto mt-6 bg-white shadow-lg rounded-xl border border-gray-200">

            <div
                className="flex items-center gap-4 p-4 cursor-pointer hover:bg-blue-50 transition"
                onClick={() => setOpen(!open)}
            >
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                    <Hospital className="text-blue-600 w-8 h-8" />
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-600">
                        {name}
                    </h3>
                    <p className="text-gray-700 text-sm flex items-center gap-1">
                        <MapPin size={14} /> {address}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {type}
                    </p>
                    <p className="text-green-600 font-semibold text-sm mt-1">
                        FREE <span className="line-through text-gray-400">₹500</span> Consultation fee at clinic
                    </p>
                </div>

                <div className="flex flex-col items-end">
                    <span className="text-green-600 font-semibold">Available Today</span>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md">
                        Book FREE Center Visit
                    </button>
                </div>
            </div>

            {open && (
                <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 transition-all duration-300 ease-in-out">
                    <div className="flex justify-between items-center mb-4">
                        <button className="text-blue-600 font-semibold flex items-center gap-1">
                            <CalendarDays size={16} /><p className="text-gray-500">Today </p>
                        </button>
                        <button className="text-gray-600 hover:text-blue-600">Tomorrow</button>
                        <button className="text-gray-600 hover:text-blue-600">Fri, 5 May</button>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-700 mb-2">Morning</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {timeSlots.morning.map((slot, i) => (
                                <button
                                    onClick={()=>{handleClick(slot,name,address,type)}}
                                    key={i}
                                    className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 text-sm"
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>

                        <p className="font-semibold text-gray-700 mb-2">Afternoon</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {timeSlots.afternoon.map((slot, i) => (
                                <button
                                    onClick={()=>{handleClick(slot,name,address,type)}}
                                    key={i}
                                    className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 text-sm"
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>

                        <p className="font-semibold text-gray-700 mb-2">Evening</p>
                        <div className="flex flex-wrap gap-2">
                            {timeSlots.evening.map((slot, i) => (
                                <button
                                    onClick={()=>{handleClick(slot,name,address,type)}}
                                    key={i}
                                    className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 text-sm"
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <button onClick={handleBooking}className="p-4">book slot</button>
        </div>
    );
};

export default HospitalCard;
