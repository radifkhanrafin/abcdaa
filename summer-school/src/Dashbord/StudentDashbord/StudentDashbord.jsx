import React from 'react';
import { FaHome, FaUtensils } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useAuth from '../../UseHooks/useAuth/useAuth';

const StudentDashbord = () => {
  const { user } = useAuth();
  return (
    <>
      <div className='mb-12 text-center lowercase'>
        <li className='text-2xl font-semibold uppercase my-4'>Student Dashbord</li>
        <li><img className='w-28 h-24 rounded-full mx-auto' src={user?.photoURL} alt="" /> </li>
        <li >{user?.displayName}</li>
        <li >{user?.email}</li>
        <li >{user?.role}</li>
      </div>
      <li><NavLink to='/dashbord/usershome'><FaHome /> Users home </NavLink></li>
      <li><NavLink to='/dashbord/selectedCourse'> <FaUtensils /> Selected Course </NavLink></li>
      <li><NavLink to='/dashbord/enrolledCourse'> My Enrolled Classes</NavLink></li>
    </>
  );
};

export default StudentDashbord;