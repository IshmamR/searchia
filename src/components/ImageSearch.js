import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Search.css';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

import {actionTypes} from '../reducer';
import {useStateValue} from '../StateProvider';

const ImageSearch = ({ hideButtons = false }) => {
	const [{}, dispatch] = useStateValue();

	const [input, setInput] = useState("");
	const history = useHistory();

	const search = (e, value) => {
		e.preventDefault();
		// console.log(input); // input is similar to this.state.input
		if (document.querySelector('.inp').value.trim() !== '') {
			dispatch({
				type: actionTypes.SET_SEARCH_TERM,
				term: input
			});

			history.push('/image-result');
		}
	}

	return (
		<form className="search">
			<div className="search_input">
				<SearchIcon />
				<input vlaue={input} className="inp" onChange={e => setInput(e.target.value)} />
				<MicIcon />
			</div>
			{!hideButtons ? (
				<div className="search_buttons">
					<Button type="submit" variant="outlined" onClick={search}>Searchia Search</Button>
					<a href="https://www.youtube.com/watch?v=hTWKbfoikeg" target="_blank" rel="noreferrer">
						<Button type="button" variant="outlined">I'm Feelong Lonely</Button>
					</a>
				</div>
			) : (
				<div className="search_buttons hidden">
					<Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
					<a href="https://www.youtube.com/watch?v=hTWKbfoikeg" type="button" variant="outlined">
						I'm feeling lonely
					</a>
				</div>
			)}
		</form>
	)
}

export default ImageSearch;