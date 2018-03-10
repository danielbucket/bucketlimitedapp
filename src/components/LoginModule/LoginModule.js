import React, { Component } from 'react';
import style from './css/LoginModuleRoot.css';

export default class LoginModule extends Component {
	constructor() {
		super()
		this.state = {
			userName: "",
			email: "",
			password: "",
			active: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
	}

	handleChange(e) {
		const input = e.target.value
		const stateKey = e.target.id

		this.setState({ [stateKey]:input })
	}

	submitLogin() {
		console.log('responsability comes with practice, mutha fuckaaaaaaa!')
	}

	toggleClass() {
		if (!this.state.active) {
			this.setState({ active:true })
		} else {
			this.setState({ active:false })	
		}

		console.log(this.state.active)
	}


	render() {
		const { userName,email,password } = this.state;
		let status = this.state.active ? "active" : "inactive";

		return (
			<section className="login_box">
				<h3 className="login_text"
						onClick={e => this.toggleClass() }>
							Log In / Sign Up
						</h3>
				<div className={ status }>
					<input id="userName"
								 type="text"
								 className="username_text loginHidden"
								 placeholder="user name"
								 value={ userName }
								 onChange = {e => this.handleChange(e)} />

					<input id="email"
								 type="email"
								 className="email_text loginHidden"
								 placeholder="email"
								 value={ email }
								 onChange = {e => this.handleChange(e)} />

					<input id="password"
								 type="text"
								 className="password_text loginHidden"
								 placeholder="password"
								 value={ password }
								 onChange = {e => this.handleChange(e)} />

					<button id="submitBtn"
									className="submitBtn loginHidden"
									onClick={() => this.submitLogin()}>
									Submit</button>
				</div>
			</section>
		)
	}
}