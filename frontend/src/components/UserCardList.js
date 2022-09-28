import React, { useState, useEffect } from 'react';

import yodlerApi from '../Api';
import UserCard from '../components/UserCard';

const UserCardList = () => {
	const [users, setUsers] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(function getUsersOnMount() {
		getAllUsers();
	}, []);

	async function getAllUsers() {
		let users = await yodlerApi.getUsers();
		setUsers(users);
		setIsLoading(false);
	}

	console.log(users);

	if (isLoading) {
		return (
			<p className="Loading fw-bold text-info fs-1 text-center mt-4">
				Loading &hellip;
			</p>
		);
	}

	return (
		<div className="UserCardList">
			<h2>Users</h2>

			{users.map((user) => (
				<UserCard
					key={user.id}
					id={user.id}
					firstName={user.firstName}
					lastName={user.lastName}
					email={user.email}
					state={user.state}
				/>
			))}
		</div>
	);
};

export default UserCardList;
