import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import yodlrApi from '../Api';

const UserDetail = () => {
	const { id } = useParams();

	const [user, setUser] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function getUser() {
			let user = await yodlrApi.getUser(id);
			setUser(user);
			setIsLoading(false);
		}
		getUser();
	}, [id]);

	if (isLoading) {
		return (
			<p className="Loading fw-bold text-info fs-1 text-center mt-4">
				Loading &hellip;
			</p>
		);
	}

	return (
		<div className="UserDetail">
			<h2 className="UserDetail-name">
				{user.firstName} {user.lastName}
			</h2>
			<div className="UserDetail-info">
				<p>{user.email}</p>
				<p>{user.state}</p>
			</div>
		</div>
	);
};

export default UserDetail;
