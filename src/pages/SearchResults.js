import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';
import {useStateValue} from '../StateProvider';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';

import Search from '../components/Search';
import LOGO from '../logo.png';
import APIResponse from '../components/APIResponse';

function SearchResults() {
	const [{ term }, dispatch] = useStateValue();

	const { data } = APIResponse(term);
	// console.log(typeof(term));
	return (
		<div className="searchresult">
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
								<Link to="/">All</Link>
							</div>
							<div className="option">
								<DescriptionIcon />
								<Link to="/">News</Link>
							</div>
							<div className="option">
								<ImageIcon />
								<Link to="/">Images</Link>
							</div>
							<div className="option">
								<LocalOfferIcon />
								<Link to="/">Shopping</Link>
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

			<div className="sr_results">
				<p className="count">
					{(data && (term !== null))? data.searchInformation.totalResults : 0} results in
					&nbsp;{(data && (term !== null))? data.searchInformation.searchTime : 0} seconds
				</p>
				{(data && (term !== null))? (
					data.items.map(dat =>
					<div className="result" key={dat.cacheId}>
						<a href={dat.formattedUrl}>{dat.displayLink}</a>
						<a href={dat.formattedUrl} className="result_title"><h2>{dat.title}</h2></a>
						<p>{dat.snippet}</p>
					</div>
					)
				):(
					<div>
						<h2 className="load">...</h2>
					</div>
				)}
				
			</div>
		</div>
	)
}

export default SearchResults;