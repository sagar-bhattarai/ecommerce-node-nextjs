"use client";
import Link from "next/link"
import {HOME_ROUTE, PROFILE_ROUTE} from "@/constants/routes";
import { useDispatch } from 'react-redux';
import { logout } from "@/redux/auth/authSlice";

const User = ({userEmail}) => {
    const dispatch = useDispatch();

    const dispatch_logout = ()=>{
        dispatch(logout());
    }
    return (
        <div className="absolute right-0 top-11 p-4 z-10 bg-darkBackground border-gray-500 shadow rounded-md ">
            <p className="text-primary">{userEmail}</p>
            <hr className="my-1 text-primary"></hr>
            <div className={`flex flex-col`}>
                <Link href={HOME_ROUTE} className="py-1 px-2 hover:bg-primary light:text-white">Dashboard</Link>
                <Link href={PROFILE_ROUTE} className="py-1 px-2 hover:bg-primary light:text-white">profile</Link>
                <Link onClick={dispatch_logout} href="" className="py-1 px-2 dark:hover:text-black hover:bg-red-600 hover:text-white text-red-600">Logout</Link>
            </div>
        </div>
    )
}

export default User