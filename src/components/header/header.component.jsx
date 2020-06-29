import React from  'react';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {auth } from '../../firebase/firebase.utils';
import './header.style.scss';



 const Header = ({ currentUser }) => (
    <div className='header'>
   
        <div className='logo-container'>
            <Logo className='logo' />
        </div>
        
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to=''>Contact</Link>
           
            {
                currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : 
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            
        </div>

    </div>
 )

 const mapStateToProps = state => ({
    currentUser: state.user.currentUser
 });
 
 export default connect(mapStateToProps)(Header);