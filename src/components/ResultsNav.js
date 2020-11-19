import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';

import Search from '../components/Search';
import ImageSearch from '../components/ImageSearch';
import LOGO from '../logo2.png';

const ResultsNav = ({rImage=false}) => {
	return (
		<div className="sr_header">
			<Link to='/' className="searchpage_logolink">
				<img className="searchpage_logo" src={LOGO} alt="..." />
			</Link>
			<div className="sr_headbody">
				
				{!rImage? (
					<Search hideButtons={true} />
				): (
					<ImageSearch hideButtons={true} />
				)}
				
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
							<Link to="/">more</Link>
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

export default ResultsNav;