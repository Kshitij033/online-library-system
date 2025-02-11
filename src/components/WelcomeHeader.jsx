import { useEffect, useRef } from "react";
import Typed from "typed.js";

function WelcomeHeader() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Welcome to the Online Library", "Explore Thousands of Books", "Find Your Favourite Authors"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: true
        })

        return () => {
            typed.destroy();
        }


    }, [])

    return (
        <div className="flex items-start gap-3">
                        <img src="/logo.png" alt="" width="37px" height="37px" className="p-0 m-0 object-contain hover:scale-105 transition-all" />
            <h1 className="text-3xl font-black text-center mb-6 mt-1">
                <span ref={typedRef}></span>
            </h1>
        </div>
    )
}

export default WelcomeHeader;