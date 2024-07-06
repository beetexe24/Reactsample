import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import Ebutton from "../../../Elements/Ebutton";
import APIrequest from "../../../APIrequest";

export default function Index()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');

    useEffect(() => {
        initFlowbite();

        async function fetchData(){
            await Promise.all([
                fetchInformation()
            ])
        }

        fetchData();
    }, []);

    const updateName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const fetchInformation = () => {

        APIrequest.get("/fetch_information")
        .then((response) => {
            if(response.data.success)
            {
                setName(response.data.data.name);
                setEmail(response.data.data.email);
            }
            else
            {
                let entryError = response.data.errors;
                var errors = '';
                for (const property in entryError) {
                    errors += "• " + entryError[property] + "\n";
                }
                setErrors(errors);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const updateInformation = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email
        };

        APIrequest.post("/update_information", data)
        .then((response) => {
            if(response.data.success)
            {
                console.log("Success");
            }
            else
            {
                let entryError = response.data.errors;
                var errors = '';
                for (const property in entryError) {
                    errors += "• " + entryError[property] + "\n";
                }
                setErrors(errors);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg mt-14 relative">
            <div className="w-full text-center">
                <span className="text-3xl font-bold">Welcome Administrator</span>
            </div>
            <div className="max-w-lg m-auto p-4 border-2 border-gray-200 border-solid rounded-lg mt-14 relative">
                <form className="space-y-6" onSubmit={updateInformation}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="textbox" onChange={updateName} value={name} name="name" id="name" placeholder="Your name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="textbox" defaultValue={email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required disabled/>
                    </div>
                    <Ebutton label="Update" color="white" background="blue" hoverBackground="blue" fontSize="medium" textSize="sm"></Ebutton>
                    <div className="text-center mb-2">
                        <p className="text-md font-semibold text-red-700 whitespace-pre-line">{errors}</p>
                    </div>
                </form>
            </div>
        </div>
        
    )
}