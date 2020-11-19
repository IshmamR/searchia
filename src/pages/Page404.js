import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import LOGO from '../logo.png';

function Page404() {
	
	return (
		<div className="home404">
			<div className="home_header">
				<Link to="/">Home</Link>
			</div>
			
			<div className="body404">
				<h1>404</h1>
				<img style={{ maxWidth: '80%'}} src={LOGO} alt="..." />
				<p>Page Not Found</p>
			</div>
		</div>
	)
}

export default Page404;