import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import LOGO from '../logo.png';
import { Apps, AccountCircle } from '@material-ui/icons';

import Search from '../components/Search';

function Home() {
	
	return (
		<div className="home">
			<div className="home_header">
				<div className="header_left">
					<Link to="/">About</Link>
					<Link to="/">Store</Link>
				</div>

				<div className="header_right">
					<Link to="/">Smail</Link>
					<a href="https://imagez.netlify.app">Images</a>
					<Apps className="md" />
					<AccountCircle className="md" />
				</div>
			</div>

			<div className="home_body">
				<img style={{ maxWidth: '80%'}} src={LOGO} alt="..." />
				{/* <h2 style={{ textAlign: 'center'}}>SEARCHIA</h2> */}
				<div className="input_container">
					<Search hideButtons={false} />
				</div>
			</div>

		</div>
	)
}

export default Home;