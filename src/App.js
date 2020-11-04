import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
// import APIResponse from './components/APIResponse';


function App() {
	return (
		<div className="App">
			{/* <APIResponse /> */}
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={ Home } />
					<Route exact path='/search-result' component={SearchResults} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
