import React from 'react';
import { Link } from 'react-router-dom';
function Navbar()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My App</Link>
                <div className='collapse navbar-collapse' id='navbar'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/card-management">Card Management</Link>
                        </li>
                         <li className='nav-item'>
                            <Link className='nav-link' to="/products">Products</Link>
                        </li>
                         <li className='nav-item'>
                            <Link className='nav-link' to="/gallery">Gallery</Link>
                        </li>
                           <li className='nav-item'>
                            <Link className='nav-link' to="/counter">Counter</Link>
                        </li>
                           <li className='nav-item'>
                            <Link className='nav-link left' to="/dashboard">Dasboard</Link>
                        </li>
                    </ul>

                </div>

                </div>
            </nav>
    )
}
export default Navbar