import { createContext, useContext } from "react";

interface Auth{
    auth_email: string,
    auth_name: string
}

export const AuthContext = createContext<Auth | undefined>(undefined);

export function useAuthContext() {
    const credentials = useContext(AuthContext); 

    if(credentials === undefined)
    {
        throw new Error("Must be used with AuthContext");
    }

    return credentials;
}