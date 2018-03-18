import React, { Component } from 'react';
import './css/LoginModule.css';
import './css/mediaQuerymax825px.css';
import './css/mediaQuerymax450px.css';

export default class LoginModule extends Component {
	constructor() {
		super()
		this.state = {
			userName: "",
			email: "",
			password: "",
			loginActive: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
	}

	handleChange(e) {
		const input = e.target.value;
		const stateKey = e.target.id;

		this.setState({ [stateKey]:input });
	}

	submitLogin() {
		console.log("moduleLogin state: ", this.state)
	}

	toggleClass() {
		// the name toggleClass can be misleading here as it 
		// doesn't actually change the className. Instead it
		// changes a true / false value

		if (!this.state.loginActive) {
			this.setState({ loginActive:true })
		} else {
			this.setState({ loginActive:false })
		}
	}


	render() {
		const { userName,email,password } = this.state;
		let status = this.state.loginActive ? "active credentialsContainer" : "inactive credentialsContainer";

		return (
			<section className="loginBox">
				<div className="loginBtnContainer">
					<button id="login_Btn"
									className="loginBtn moduleBtn"
									onClick={ () => this.toggleClass() }>
							Log In / Sign Up
					</button>
				</div>

				<div className={ status }>
					<input id="userName"
								 type="text"
								 className="usernameText loginInput"
								 placeholder="user name"
								 value={ userName }
								 onChange={ e => this.handleChange(e) }
					/>

					<input id="email"
								 type="email"
								 className="emailText loginInput"
								 placeholder="email"
								 value={ email }
								 onChange = { e => this.handleChange(e) }
					/>

					<input id="password"
								 type="text"
								 className="passwordText loginInput"
								 placeholder="password"
								 value={ password }
								 onChange = { e => this.handleChange(e) }
					/>

					<button id="submitBtn"
									className="submitBtn moduleBtn"
									onClick={ () => this.submitLogin() }>
									Submit
					</button>
				</div>
			</section>
		)
	}
};