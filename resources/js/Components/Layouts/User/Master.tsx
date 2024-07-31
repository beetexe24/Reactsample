import React, { useState } from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Side from "./Side";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Master()
{
    interface Auth{
        auth_email: string,
        auth_name: string
    }

    const [authCredentials] = useState<Auth>({
        auth_email: (localStorage.getItem("auth-email")) ? localStorage.getItem("auth-email")! : '',
        auth_name: (localStorage.getItem("auth-name")) ? localStorage.getItem("auth-name")! : ''
    });

    return (
        <div>
            <AuthContext.Provider value={authCredentials}>
            <Side />
            <div className="p-4 sm:ml-64">
            <Outlet />
            </div>
            </AuthContext.Provider>
            
        </div>
    )
}