import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import yodlrApi from './Api';
import AppRoutes from './Routes';

function App() {
	const [user, setUser] = useState();

	/* handles signup */
	async function signup(data) {
		try {
			let user = await yodlrApi.addUser(data);
			setUser(user);
			return { success: true };
		} catch (err) {
			console.error('signup failed', err);
			return { success: false, err };
		}
	}

	return (
		<div className="App">
			<BrowserRouter>
				<AppRoutes signup={signup} />
			</BrowserRouter>
		</div>
	);
}

export default App;
