import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./OpeningPage.css";
import FloatingNav from "./FloatingNav";
import CalendarDrawer from "../Components/calender/CalendarDrawer.jsx";
import IntroLogo from "./intrologo.jsx";

export default function OpeningPage(props) {
    useEffect(() => {
        const scroll = new LocomotiveScroll();
    }, []);
    

    const [openCalendar, setOpenCalendar] = useState(false);
    const toggleCalendar = () => {
        setOpenCalendar((prev) => !prev);
        console.log("Calendar Open:", !openCalendar);
    };
    
    return (
        <div className="Container">
            <FloatingNav toggleCalendar={toggleCalendar} />
            <IntroLogo/>
            <div className="flex flex-col justify-center items-center z-10 absolute">
            <div className="block sm:hidden z-20 bg-tranparent">
                <img src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1756030168/gyansetu_onm94g.png" alt="" />
            </div>
            <h1 className="block sm:hidden text-[2.5rem] z-20 text-orange-600 font-bold mt-1 mb-20 bg-black rounded-md bg-opacity-50">
                Welcome to GyanSetu!
            </h1>
            </div>

            <div className="video">
                <video loop muted autoPlay className="hidden sm:block lg:block z-0" src="https://res.cloudinary.com/dst3yuj1w/video/upload/v1756030594/Video_pasate.mp4"></video>
            </div>
            <CalendarDrawer open={openCalendar} onClose={toggleCalendar} />
            
        </div>
    );
}
