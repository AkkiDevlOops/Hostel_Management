"use client";

import {AuthProvider} from "@/context/context";
import { useAuth } from "@/context/context";


export default function Providers({children}) {
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    );
    
}