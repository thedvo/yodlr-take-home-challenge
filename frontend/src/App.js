import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import yodlerApi from './Api';
import AppRoutes from './Routes';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</div>
	);
}

export default App;
