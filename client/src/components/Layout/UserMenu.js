import React from 'react';
import { NavLink } from 'react-router-dom';

function UserMenu() {
  return (
    <>
        <div className='text-center'>
            <ul className="list-group">
                <h4>Dashboard</h4>
                <NavLink to="/dashboard/user/profile" className="list-group-item">Profile</NavLink >
                <NavLink to="/dashboard/user/oders" className="list-group-item">Oders</NavLink >
                
            </ul>
        </div>
    </>
  )
}

export default UserMenu