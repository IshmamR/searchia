import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
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
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;