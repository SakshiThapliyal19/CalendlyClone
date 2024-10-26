'use client';
import {useEffect, useState} from "react";
import Link from "next/link";
import { Play} from "lucide-react";
export default function Hero(){
    const [showLine, setShowLine]= useState(false);
    useEffect(()=>{
        setShowLine(true);
    },[]);
    return(
        <section className="text-center mt-24">
        <h1 className="text-5xl font-bold mb-6 leading-snug">Scheduling {' '}
            <span className={"text-blue-600 cool-underline "+(showLine?'show-underline':'')}>
                made simple
            </span>
                <br/>
        For people like you</h1>
        <p className="text-gray-600">Automated scheduling system.<br/>
        It is made for our Mentor-Mentee Project
        </p>
        <div className="mt-4 flex gap-4 justify-center">
            <Link href={'/api/auth'} className="bg-black text-white py-2 px-4 rounded-full">
            Get started for free
            </Link>
            <Link href={'/'} className="border border-gray-300 py-2 px-4 rounded-full inline-flex gap-1 text-gray-800 flex items-center">
            <Play size={16}/>
            Watch video
            </Link>
        </div>
      </section>
    );
}