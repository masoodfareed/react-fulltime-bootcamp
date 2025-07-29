import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Dashboard()
{
    return(
        <div className='container mt-4 border rounded p-4 shadow-lg'>
            <h2 className='display-4 mb-4'>Dashboard</h2>
            <div className='row'>
                <div className='col-md-3'>
                    <ul className='nav flex-column nav-pills'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/profile">Profile</Link>
                            </li>
                            <li className='nav-item'>
                            <Link className='nav-link' to="/counter">Counter</Link>
                            </li>
                    </ul>
                </div>
                <div className='col-md-9'>
                    <div className='p-3 border rounded bg-light'>
                        <Outlet />
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Dashboard;