import React from 'react';

import '../styles/SearchResults.css';
import {useStateValue} from '../StateProvider';

import ImageAPI from '../components/ImageAPI';
import ResultsNav from '../components/ResultsNav';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import imagez from '../images/imagez.PNG';
import imagez2 from '../images/imagez2.PNG';

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: '#42baf5'
		}
	}
});

function ImageResults() {
	const [{ term }, dispatch] = useStateValue();
	const { data } = ImageAPI(term);
	// console.log(data);
	return (
		<div className="searchresult">

			<ResultsNav rImage={true} />
			<div className="box">
				{data? (
					<div className="images" style={{color: 'red', textAlign: 'center'}}>
						{data.value?.map(image => 
							<img className="image" 
								src={image.url} 
								key={image.url} 
								alt="error loading image" />
						)}
					</div>

				): (
					<div>
						<MuiThemeProvider theme={theme}>
							<LinearProgress color="secondary" />
						</MuiThemeProvider>
					</div>
				)}

				<div className="imageZ">
					<h1>ImageZ</h1><br />
					<h3>Get royalty free stock photos.</h3>
					<div className="imgz" >
						<img src={imagez} alt="..." />
						<img src={imagez2} alt="..." />
					</div>
					<a href="https://imagez.netlify.app" target="_blank" rel="noreferrer">
						<Button className="visit" type="button" variant="outlined">Visit ImageZ</Button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ImageResults;