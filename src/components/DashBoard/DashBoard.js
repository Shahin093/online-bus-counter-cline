import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineChartPie } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import Loader from '../Loader/Loader';

const DashBoard = () => {
    const [admin, adminLoading] = useAdmin();
    if (adminLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* Page content here  */}
                <h2 className='items-center justify-center text-3xl font-bold text-purple-500 mx-auto'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-yellow-200 text-base-content">
                    {/* Sidebar content here  */}
                    <li><Link to='/dashboard'> <AiFillHome /> My Profile</Link></li>
                    <li><Link to='/dashboard/mybooking'> <AiFillHome /> My Booking</Link></li>
                    {
                        admin === 'admin' &&
                        <>
                            <li><Link to='/dashboard/comfirm'> <HiOutlineChartPie />Comfirm Booking</Link></li>
                            <li><Link to='/dashboard/slothandle'> <AiFillHome /> Bus SLoting Handaling</Link></li>
                            <li><Link to='/dashboard/featuresinfo'> <FaUserAlt />FeatureInfo</Link></li>

                        </>


                    }



                    {/* <li><Link to='/dashboard/presenger'> <FaUserAlt />Presenger</Link></li> */}
                    <li><Link to='/dashboard/chart'> <HiOutlineChartPie />Chart</Link></li>

                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    {/* {admin &&
                    <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li>
                            <Link to='/dashboard/addDoctor'>Add a Doctor</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/manageDoctor'>Manage Doctor</Link>
                        </li>


                    </>} */}
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;