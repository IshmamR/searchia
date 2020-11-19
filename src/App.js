import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import SearchResults from './pages/SearchResults';
import ImageResults from './pages/ImageResults';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={ Home } />
					<Route exact path='/search-result' component={SearchResults} />
					<Route exact path='/image-result' component={ImageResults} />
					<Route path='*' component={Page404} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
