import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Search from '../components/Search';
import LOGO from '../logo2.png';

const ResultNav = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="sr_header">
			<Link to='/' className="searchpage_logolink">
				<img className="searchpage_logo" src={LOGO} alt="..." />
			</Link>
			<div className="sr_headbody">
				
				<Search hideButtons={true} />
				
				<div className="sr_options">
					<div className="sr_opleft">	
						<div className="option">
							<SearchIcon />
							<Link to="/search-result">All</Link>
						</div>
						<div className="option">
							<DescriptionIcon />
							<Link to="/">News</Link>
						</div>
						<div className="option">
							<ImageIcon />
							<Link to="/image-result">Images</Link>
						</div>
						<div className="option">
							<LocalOfferIcon />
							<Link to="/">Books</Link>
						</div>
						<div className="option">
							<MoreVertIcon />
							<Link aria-controls="simple-menu" 
								aria-haspopup="true" onClick={handleClick}>more</Link>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>
									<a href="https://ishmams.herokuapp.com">Profile</a>
								</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
								<MenuItem onClick={handleClose}>Logout</MenuItem>
							</Menu>
						</div>
					</div>
					<div className="sr_opright">
						<Link to="/">Settings</Link>
						<Link to="/">Tools</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default  ResultNav;