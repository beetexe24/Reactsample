import React from "react";

const Etextbox = ({handleOnchange, type, name, id, background, border, color, textSize, focusRingBackground, placeHolder, required}) => {
    return (
        <input onChange={handleOnchange} type={type} name={name} id={id} className={`bg-${background}-50 border border-${border}-300 text-${color}-900 text-${textSize} rounded-lg focus:ring-${focusRingBackground}-500 focus:border-${focusRingBackground}-500 block w-full p-2.5`} placeholder={placeHolder} required={required}/>
    )
}

export default Etextbox;