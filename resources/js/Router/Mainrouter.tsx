import React from "react";
import { Route, Routes } from "react-router";
import Master from "../Components/Layouts/User/Master";
import Index from "../Components/Views/User/Home/Index";
import Login from "../Components/Views/User/Auth/Login";

export default function Mainrouter()
{
    return (
        <Routes>
            <Route path="/" element={<Master />}>
                <Route path="/" element={<Index />} />
            </Route>

            <Route>
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    )
}