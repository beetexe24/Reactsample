import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Ebutton from "../../../Elements/Ebutton";
import Etextbox from "../../../Elements/Etextbox";



export default function Login()
{
    interface Data{
        email: string,
        password: string
    }

    const [credentials, setCredentials] = useState<Data>({email: '', password: ''});
    const [errors, setErrors] = useState<string>('');

    const updateCredentials = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials,[e.target.name] : e.target.value});  
    }

    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.get("/sanctum/csrf-cookie").then(() => {
            axios.post('/api/authenticate', credentials)
            .then(response => {
                    if(response.data.success)
                    {
                        localStorage.setItem("auth-token", response.data.token);
                        localStorage.setItem("auth-email", response.data.email);
                        localStorage.setItem("auth-name", response.data.name);
                        window.location.href = "/";
                    }
                    else
                    {
                        setErrors(response.data.message);
                    }
                });
        });
    }

    return (
        <div className="w-full flex flex-col min-h-screen p-5 md:p-10">
            <div className="w-full m-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                
                <form className="space-y-6" onSubmit={login}>
                    <div className="w-full text-center">
                        <h5 className="text-xl font-medium text-gray-900">Assessment</h5>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <Etextbox handleOnchange={updateCredentials} type="email" name="email" id="email" background="blue" border="gray" color="gray" textSize="sm" focusRingBackground="blue" placeHolder="Your email address" required={true}></Etextbox>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <Etextbox handleOnchange={updateCredentials} type="password" name="password" id="password" background="blue" border="gray" color="gray" textSize="sm" focusRingBackground="blue" placeHolder="••••••••••" required={true}></Etextbox>
                    </div>

                    <Ebutton label="Login to your account" color="white" background="blue" hoverBackground="blue" fontSize="medium" textSize="sm"></Ebutton>
                    <div className="text-sm font-medium text-gray-500">
                        Not registered? <Link to="/create-account" className="text-blue-700 hover:underline">Create account</Link>
                    </div>
                    <div className="text-center mb-2">
                        <p className="text-md font-semibold text-red-700 whitespace-pre-line">{errors}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}