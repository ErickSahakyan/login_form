import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar__box'>
			<Link to='/home' style={{textDecoration: 'none', color: 'wheat'}}><span>Home</span></Link>
			<Link to='/login' style={{textDecoration: 'none', color: 'wheat'}}><span>Login</span></Link>
			<Link to='/registration' style={{textDecoration: 'none', color: 'wheat'}}><span>Registration</span></Link>
		</div>
	);
};

export default Navbar;