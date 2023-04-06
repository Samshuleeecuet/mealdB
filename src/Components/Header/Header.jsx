import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src="/images/Tasty_HUT.png" alt="" />
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end mr-8">
                <div className="indicator">
                        <button className="btn btn-warning "><Link to='/foods'>Foods</Link></button>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default Header;