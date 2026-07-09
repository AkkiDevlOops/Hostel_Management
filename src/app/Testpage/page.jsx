"use client";
import React from 'react'
import { useAuth } from '@/context/context';

export default function page(params) {
    

 const {student,loading} = useAuth();
    if(!loading){
        console.log(student);
    }
    console.log(loading);
  return (
    <div>page</div>
  )
}
