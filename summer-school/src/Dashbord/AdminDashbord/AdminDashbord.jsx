import React from 'react';
import useAuth from '../../UseHooks/useAuth/useAuth';
import { NavLink } from 'react-router-dom';
import { FaHome, FaPenAlt, FaUserAlt } from 'react-icons/fa';

const AdminDashbord = () => {
    const { user } = useAuth()
    return (
        <>
            <div className='mb-12 text-center lowercase'>
                <li className='text-2xl font-semibold uppercase my-4'>Admin Dashbord</li>
                <li><img className='w-28 rounded-full mx-auto' src={user?.photoURL} alt="" /> </li>
                <li >{user?.displayName}</li>
                <li >{user?.email}</li>
                <li >{user?.role}</li>
            </div>
            <li><NavLink to='/dashbord/adminhome'><FaHome />Admin home </NavLink></li>
            <li><NavLink to='/dashbord/manageUser'> <FaUserAlt /> Manage Users </NavLink></li>
            <li><NavLink to='/dashbord/manageClass'> <FaPenAlt /> Manage Class </NavLink></li>
            <li><NavLink to='/dashbord/webAnalysis'>Web Analysis</NavLink></li>
        </>
    );
};

export default AdminDashbord;