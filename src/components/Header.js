import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>ポートフォリオ</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href='#'>SNS</a>
                </li>
            </ul>
        </nav>
    </header>


  );
};

export default Header