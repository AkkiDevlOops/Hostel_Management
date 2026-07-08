"use client";
import { getUser } from "@/lib/getuser";
import { createContext, useContext, useEffect, useState } from "react";


   
const Authcontext = createContext();



export const AuthProvider = ({children})=> {

     const [student,setstudent] = useState("");
 const [loading,setloading] = useState(true)
   
    useEffect(()=>{
        async function loadUser() {

    try{
        const data = await getUser();
        // console.log(data);
        setstudent(data);
        
    }
    
    catch(err){
        console.log(err);
    }finally{
        setloading(false);
    }
}
loadUser();
    },[])

   
    
// console.log(student)


    return(
        <Authcontext.Provider
            value={{student,loading}}
        >
            {children}
        </Authcontext.Provider>

    );
    
}

export function useAuth() {
    return useContext(Authcontext);
}
