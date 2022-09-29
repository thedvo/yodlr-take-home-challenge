import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpForm = ({ signup }) => {
	const INITIAL_STATE = {
		firstName: '',
		lastName: '',
		email: '',
	};

	const [formData, setFormData] = useState(INITIAL_STATE);
	const [formErrors, setFormErrors] = useState([]);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	async function handleSubmit(e) {
		e.preventDefault();
		let res = await signup(formData);
		if (res.success) {
			navigate('/users');
		} else {
			setFormErrors(res.errors);
		}
	}

	return (
		<div className="SignupForm">
			<div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-4">
				<div className="card">
					<div className="card-body">
						<h5 className="SignUpForm-lead">Sign Up</h5>
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<input
									id="firstName"
									name="firstName"
									type="text"
									onChange={handleChange}
									value={formData.firstName}
									autoComplete="off"
									className="form-control"
									placeholder="First Name"
									required
								/>
							</div>
							<div className="mb-3">
								<input
									id="lastName"
									name="lastName"
									type="text"
									onChange={handleChange}
									value={formData.lastName}
									autoComplete="off"
									className="form-control"
									placeholder="Last Name"
									required
								/>
							</div>
							<div className="mb-3">
								<input
									id="email"
									name="email"
									type="text"
									onChange={handleChange}
									value={formData.email}
									autoComplete="off"
									className="form-control"
									placeholder="Email"
									required
								/>
							</div>
							<button className="btn btn-primary d-grid gap-2 col-6 mx-auto mt-4">
								Sign Up
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
