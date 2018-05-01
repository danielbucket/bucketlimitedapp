import React, { Component } from 'react';
import './css/LoginModule.css';
import './css/mediaQuerymax825px.css';
import './css/mediaQuerymax450px.css';

export default class LoginModule extends Component {
	constructor(props) {
		super()
		this.state = {
			userName: "",
			email: "",
			password: "",
			boxSlider: props.boxSlider
		}

		this.handleChange = this.handleChange.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
		this.stateSet = props.stateSet;
	}

	handleChange(e) {
		const input = e.target.value;
		const stateKey = e.target.id;

		this.setState({ [stateKey]:input });
	}

	toggleClass() {
		// the name toggleClass can be misleading here as it 
		// doesn't actually change the className. Instead it
		// changes a true / false value

		if (!this.props.boxSlider) {
			this.props.stateSet("boxSlider",true)
		} else { this.props.stateSet("boxSlider",false) }
	}

	submitLogin() {

		this.toggleClass()
	}


	render() {
		const { userName,email,password } = this.state;
		const status = this.state.boxSlider ? "inactive credentials_container" : "active credentials_container";

		return (
			<section className="login_box">
				<div className="login_btn_container">
					<div className="module_btn">
							Log In / Sign Up
					</div>
				</div>

				<div className={ status }>
					<input id="userName"
								 type="text"
								 className="username_text login_input"
								 placeholder="user name"
								 value={ userName }
								 onChange={ e => this.handleChange(e) }
					/>

					<input id="email"
								 type="email"
								 className="email_text login_input"
								 placeholder="email"
								 value={ email }
								 onChange = { e => this.handleChange(e) }
					/>

					<input id="password"
								 type="text"
								 className="password_text login_input"
								 placeholder="password"
								 value={ password }
								 onChange = { e => this.handleChange(e) }
					/>

					<div id="submitBtn"
									className="module_btn"
									onClick={ () => this.submitLogin() }>
									Submit
					</div>
				</div>
			</section>
		)
	}
};