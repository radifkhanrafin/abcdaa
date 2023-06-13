import React from 'react';
import { FaHome, FaMailBulk, FaShoppingBag, FaUtensils } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useAuth from '../../UseHooks/useAuth/useAuth';

const InstuctorDashbord = () => {
    const { user } = useAuth()
    return (
        <>
            <div className='mb-12 text-center lowercase'>
                <li className='text-2xl font-semibold uppercase my-4'>Instuctor Dashbord</li>
                <li><img className='w-28 h-[100px] rounded-full mx-auto' src={user?.photoURL} alt="" /> </li>
                <li >{user?.displayName}</li>
                <li >{user?.email}</li>
                <li >{user?.role}</li>
            </div>
            <li><NavLink to='/dashbord/usershome'><FaHome /> Instuctor home </NavLink></li>

            <li><NavLink to='/dashbord/addCourse'> <FaUtensils /> Add Course </NavLink></li>
            <li><NavLink to='/dashbord/myclass'> My Classes</NavLink></li>
        </>
    );
};

export default InstuctorDashbord;