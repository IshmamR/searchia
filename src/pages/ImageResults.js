import React from 'react';

import '../styles/SearchResults.css';
import {useStateValue} from '../StateProvider';

import APIResponse from '../components/APIResponse';
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

function ImageResults() {
	const [{ term }, dispatch] = useStateValue();
	const { data } = APIResponse(term);
	// console.log(typeof(term));
	return (
		<div className="searchresult">

			<ResultsNav rImage={true} />

			<div className="sr_results"></div>
				
		</div>
	)
}

export default ImageResults;