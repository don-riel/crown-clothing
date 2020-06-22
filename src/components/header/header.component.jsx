import React from  'react';

import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.style.scss';



 const Header = () => (
    <div className='header'>
   
        <div className='logo-container'>
            <Logo className='logo' />
        </div>
        
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to=''>Contact</Link>
        </div>

    </div>
 )

 export default Header;