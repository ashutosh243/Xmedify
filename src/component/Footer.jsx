import React from "react";
import {
    Facebook,
    Twitter,
    Youtube,
    //   Pinterest,

    ChevronRight,
    Shield,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#133E87] text-white py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Shield size={26} className="text-[#5CC9F5]" />
                            <span className="text-xl font-semibold text-[#5CC9F5]">
                                Medify
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> About Us
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Our Pricing
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Our Gallery
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Appointment
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Privacy Policy
                            </li>
                        </ul>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Orthology
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Neurology
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Dental Care
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Opthalmology
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Cardiology
                            </li>
                        </ul>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> About Us
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Our Pricing
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Our Gallery
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Appointment
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#5CC9F5] transition">
                                <ChevronRight size={16} /> Privacy Policy
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Line */}
                <hr className="my-8 border-white/20" />
                <p className="text-center text-sm text-white/80">
                    Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
