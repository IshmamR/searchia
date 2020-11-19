import { useState, useEffect } from 'react';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';

const ImageAPI = (term) => {
	const [{}, dispatch] = useStateValue();

	const [data, setData] = useState(null);

	const cox = "8403ecedf7f038bc5";
	const key = "AIzaSyA7BdG8-GQegMIGVv-C5qcLvTKCUVNCA-U";
	// 

	useEffect(() => {
		var query;
		if (term !== null && term !== undefined) {
			query = term;
			localStorage.setItem('query', term);
		} else {
			query = localStorage.getItem('query');
		}
		console.log(query);
		
		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: query
		});
		const url = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI";
		const fetchData = async() => {
				fetch(`${url}?pageNumber=1&pageSize=30&q=${query}&autoCorrect=true`, {
					"method": "GET",
					"headers": {
						"x-rapidapi-key": "2fc4caa219msh083855d72aa609bp14b22bjsnf6662e5d4fb6",
						"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
					}
				})
				.then(response => {
					console.log(response);
					return response.json();
				})
				.then(data => {
					// console.log(data);
					setData(data);
				});
		}
		fetchData();
	}, [term])
	
	return { data };
}

export default ImageAPI;



// fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cox}5&q=${query}&searchType=image`)
// .then(response => {
// 	if (response.status === 200) {
// 		return response.json();
// 	}
// })