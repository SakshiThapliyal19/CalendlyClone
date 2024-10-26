'use server';
import { Calendar,CalendarDays,Handshake } from "lucide-react";
import Link from "next/link";
import { session } from "../libs/session";

export default async function Header(){
    const email= await session().get('email');
    
    return(
        <header className="flex items-center gap-4 justify-between py-6 text-gray-600 ">
            <div className="flex items-center gap-10">
            <Link href={'/'} className="text-blue-600 font-bold text-2xl flex gap-1 items-center">
            <CalendarDays size={24}/>
            Calendix
            </Link>
            <nav className="flex items-center gap-6">
                <Link href={'/about'}>About</Link>
                <Link href={'/features'}>Features</Link>
                <Link href={'/pricing'}>Pricing</Link>
            </nav>
            </div>
            {email && (
                <nav className="flex items-center gap-4">
                <Link href={'/about'} className="bg-blue-600 text-white py-2 px-4 rounded-full">Dashboard</Link>
                <Link href={'/api/logout'}>Logout</Link>
                </nav>
                
            )}
            {!email && (
                <nav className="flex items-center gap-4">
                <Link href={'/api/auth'}>Sign in</Link>
                <Link href={'/api/auth'} className="bg-blue-600 text-white py-2 px-4 rounded-full">Get started</Link>
                </nav>
            )}
            
      </header>
    );

}