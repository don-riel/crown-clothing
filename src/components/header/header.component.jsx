import React from  'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import {auth } from '../../firebase/firebase.utils';
import CartIcon  from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.style.scss';



 const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
           
    </div>
 );

 const mapStateToProps = (state) => createStructuredSelector({
     currentUser: selectCurrentUser,
     hidden: selectCartHidden
 });

 export default connect(mapStateToProps)(Header);