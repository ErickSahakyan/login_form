import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { newUser } from '../store/createNewUserSlice';

const Registration = () => {

	const [regUser, setRegUser] = useState({ username: '', email: '', password: '' });
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const handlerSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			{show ? <div className='registered__block'>
				<span className='reg__text'>Welcome `{regUser.username}`, you have successfully registered</span>
				<div className='link__box'>
					<Link to='/login' className='go__login'>Do you want to come in?</Link>
					<Link onClick={() => setShow(show => !show)} className='go__login'>Do you want to register a new user?</Link>
				</div>
			</div> : <form onSubmit={handlerSubmit} className='reg__block'>
				<p className='sign__text'>Registration</p>
				<input className='input__field'
					placeholder='Enter your username...'
					type='text'
					value={regUser.username}
					onChange={(e) => setRegUser({ ...regUser, username: e.target.value })}
				/>
				<input className='input__field'
					placeholder='Enter your email...'
					type='email'
					value={regUser.email}
					onChange={(e) => setRegUser({ ...regUser, email: e.target.value })}
				/>
				<input className='input__field'
					placeholder='Enter your password...'
					type='password'
					value={regUser.password}
					onChange={(e) => setRegUser({ ...regUser, password: e.target.value })}
				/>
				<button className='sign__button'
					disabled={regUser.username && regUser.email && regUser.password !== '' ? '' : 'disabled'}
					onClick={() => {
						dispatch(newUser(regUser));
						setShow(show => !show);
					}}
				>SIGN UP</button>
			</form>}
		</div >
	);
};

export default Registration;



