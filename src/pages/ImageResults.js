import React from 'react';
import { Link } from 'react-router-dom';
import './ImageResults.css';
import {useStateValue} from '../StateProvider';

import ImageAPI from '../components/ImageAPI';
import ResultsNav from '../components/ResultsNav';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: '#42baf5'
		}
	}
});

function SearchResults() {
	const [dispatch] = useStateValue();
	const term = "duck";
	const { data } = ImageAPI(term);
	console.log(data);
	return (
		<div className="searchresult">
			<ResultsNav />

			<div className="images" style={{color: 'red'}}>
				{data?.value.map(image => 
					<img className="image" 
						src={image.url} alt="error loading image" 
						key={Math.floor(Math.random()*1000)+Date.now()+Math.floor(Math.random()*1000)} 
					/>
				)}
			</div>
		</div>
	)
}

export default SearchResults;