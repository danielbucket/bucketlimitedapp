import React, { Component } from 'react';
import './LoginModule.css';


export default class LoginModule extends Component {
	constructor() {
		super()
		this.state = {
			userName: "",
			email: "",
			password: ""
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const input = e.target.value
		const stateKey = e.target.id

		this.setState({ [stateKey]:input })
	}

	submitLogin() {
		console.log('responsability takes practice, mutha fuckaaaaaaa!')
	}


	render() {
		const { userName,email,password } = this.state;

		return (
			<section className="login_box">
				<h3 className="login_text">Log In / Sign Up</h3>
				<input id="userName"
							 type="text"
							 className="username_text"
							 placeholder="user name"
							 value={ userName }
							 onChange = {e => this.handleChange(e)} />

				<input id="email"
							 type="email"
							 className="email_text"
							 placeholder="email"
							 value={ email }
							 onChange = {e => this.handleChange(e)} />

				<input id="password"
							 type="text"
							 className="password_text"
							 placeholder="password"
							 value={ password }
							 onChange = {e => this.handleChange(e)} />



				<button id="submitBtn"
								onClick={() => this.submitLogin()}>
								Submit</button>
			</section>
		)
	}
}