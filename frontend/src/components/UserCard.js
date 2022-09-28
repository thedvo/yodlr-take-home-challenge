import React from 'react';
import './UserCard.css';

const UserCard = ({ id, firstName, lastName, email, state }) => {
	return (
		<div className="UserCard">
			<p>
				{firstName} {lastName}
			</p>
			<p>{email}</p>
			<p>State: {state}</p>
		</div>
	);
};

export default UserCard;
