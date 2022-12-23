import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

const Navbar = React.lazy(() => import('./components/Navbar'));
const Login = React.lazy(() => import('./components/Login'));
const Registration = React.lazy(() => import('./components/Registration'));
const Home = React.lazy(() => import('./pages/Home'));

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path='/home' element={
						<React.Suspense>
							<Home />
						</React.Suspense>
					} />
					<Route path='/login' element={
						<React.Suspense>
							<Login />
						</React.Suspense>} />
					<Route path='/registration' element={
						<React.Suspense>
							<Registration />
						</React.Suspense>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
