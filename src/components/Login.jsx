import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import IsUser from './IsUser';

const Login = () => {

	const [logUser, setLogUser] = useState({ username: '', email: '', password: '' });
	const [show, setShow] = useState(false);

	const users = useSelector(state => state.create.users);

	const isUserData = (logUser, setShow) => users.find((user) => {
		if (logUser.username === user.username && logUser.email === user.email && logUser.password === user.password) {
			setShow(show => !show);
		} else if (logUser.username !== user.username || logUser.email !== user.email || logUser.password !== user.password) {
			alert('You have entered incorrect data, please try again');
		}
	});

	return (
		<div>
			{show ? <div>
				<IsUser logUser={logUser} />
			</div> : <div className='log__block'>
				<p className='sign__text'>Authorization</p>
				<input className='input__field'
					placeholder='Enter your username...'
					type='text'
					value={logUser.username}
					onChange={(e) => setLogUser({ ...logUser, username: e.target.value })}
				/>
				<input className='input__field'
					placeholder='Enter your email...'
					type='email'
					value={logUser.email}
					onChange={(e) => setLogUser({ ...logUser, email: e.target.value })}
				/>
				<input className='input__field'
					placeholder='Enter your password...'
					type='password'
					value={logUser.password}
					onChange={(e) => setLogUser({ ...logUser, password: e.target.value })}
				/>
				<button className='sign__button'
					disabled={logUser.username && logUser.email && logUser.password !== '' ? '' : 'disabled'}
					onClick={() => isUserData(logUser, setShow)}
				>SIGN IN</button>
			</div>}
		</div>
	);
};

export default Login;