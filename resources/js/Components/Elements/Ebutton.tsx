import React from "react";

const Ebutton = ({label, color, background, hoverBackground, fontSize, textSize}) => {
    return (
        <button type="submit" className={`w-full text-${color} bg-${background}-700 hover:bg-${hoverBackground}-800 focus:ring-4 focus:outline-none focus:ring-${background}-300 font-${fontSize} rounded-lg text-${textSize} px-5 py-2.5 text-center`}>
            {label}
        </button>
    )
}

export default Ebutton;