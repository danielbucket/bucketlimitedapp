import React, { Component, Proptypes } from 'react';
import './css/LoginModuleRoot.css';

export default class LoginModule extends Component {
	constructor() {
		super()
		this.state = {
			userName: "",
			email: "",
			password: "",
			active: false,
			disabled: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
	}

	handleChange(e) {
		const input = e.target.value;
		const stateKey = e.target.id;

		this.setState({ [stateKey]:input })
	}

	submitLogin() {
		console.log('responsability comes with practice, mutha fuckaaaaaaa!')
	}

	toggleClass() {
		if (!this.state.active) {
			this.setState({ disabled:true })
			this.setState({ active:true })
		}
	}


	render() {
		const { userName,email,password,disabled } = this.state;
		let status = this.state.active ? "active" : "inactive";

		return (
			<section className="login_box">
				<button className="login_text"
								disabled={ disabled }
								onClick={() => this.toggleClass() }>
							Log In / Sign Up
				</button>
				<div className={ status }>
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
									className="submitBtn"
									onClick={() => this.submitLogin()}>
									Submit</button>
				</div>
			</section>
		)
	}
}