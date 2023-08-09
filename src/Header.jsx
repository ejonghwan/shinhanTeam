import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/userinfo">user info</Link></li>
                <li><Link to="/users">users</Link></li>
                <li><Link to="/memo">memo</Link></li>
                <li><Link to="/state">state</Link></li>
                <li><Link to="/effect">effect</Link></li>
            </ul>
        </nav>
    );
};

export default memo(Header);