import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../src/Home';
import UserCardList from '../src/components/UserCardList';
import UserDetail from '../src/components/UserDetail';

import SignUpForm from '../src/forms/RegisterForm';

import NotFound from '../src/NotFound';

const AppRoutes = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/users" element={<UserCardList />} />
			<Route exact path="/users/:id" element={<UserDetail />} />
			<Route exact path="/signup" element={<SignUpForm />} />
		</Routes>
	);
};

export default AppRoutes;
