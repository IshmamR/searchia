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

function SearchResults() {
	const [{ term }, dispatch] = useStateValue();
	const { data } = APIResponse(term);
	// console.log(typeof(term));
	return (
		<div className="searchresult">

			<ResultsNav />

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
						<MuiThemeProvider theme={theme}>
							<LinearProgress color="secondary" />
						</MuiThemeProvider>
					</div>
				)}
				
			</div>
		</div>
	)
}

export default SearchResults;