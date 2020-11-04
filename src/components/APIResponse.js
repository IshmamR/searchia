import { useState, useEffect } from 'react';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';

const APIResponse = (term) => {
	const [{}, dispatch] = useStateValue();

	const [data, setData] = useState(null);
	const key1 = 'AIzaSyAK3f4BzzZc7q9tjHwAqO-1JQpaPJif1PE';
	const key2 = 'AIzaSyA7BdG8-GQegMIGVv-C5qcLvTKCUVNCA-U';
	const cx = '4ddab6b777b0a1266';

	useEffect(() => {
		// From Web Search API (500 per day)
		// console.log(typeof(term));
		// console.log(term);
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

		const fetchData = async() => {
			if(term !== null) {
				/*fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?pageNumber=1&q=${term}&autoCorrect=false&pageSize=10`, {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
						"x-rapidapi-key": "2fc4caa219msh083855d72aa609bp14b22bjsnf6662e5d4fb6"
					}
				})*/
				fetch(`https://www.googleapis.com/customsearch/v1?key=${key2}&cx=${cx}&q=${query}`)
				.then(response => {
					if (response.status === 200) {
						return response.json();
					} else {
						fetch(`https://www.googleapis.com/customsearch/v1?key=${key1}&cx=${cx}&q=${query}`)
						.then(response => {
							return response.json();
						})
					}
				})
				.then(data => {
					// console.log(data);
					setData(data)
				})
			}
		}
		fetchData();
	}, [term])
	
	return { data };
}

export default APIResponse;