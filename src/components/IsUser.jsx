import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





const IsUser = ({ logUser }) => {

	const users = useSelector(state => state.create.users);

	const userData = users.find((user) => {
		if (logUser.username === user.username) {
			return user.username;
		}
		if (logUser.email === user.email) {
			return user.email;
		}
		if (logUser.password === user.password) {
			return user.password;
		}
	});

	const isUserData = (userData, logUser) => {
		if (logUser.username === userData.username && logUser.email === userData.email && logUser.password === userData.password) {
			return (
				<div className='logged__block' >
					<p className='logged__text'>Dear {userData.username}, you have successfully logged in</p>
					<Link to='/home' style={{ textDecoration: 'none', color: 'wheat', fontSize: '1.5rem', marginTop: '30px' }}>Home</Link>
				</div >
			);
		}
	};

	return (
		<div className='is__user-block'>
			{isUserData(userData, logUser)}
		</div>
	);
};

export default IsUser;


