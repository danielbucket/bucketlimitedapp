import React, { Component } from 'react';
import './css/pageUnderConstruction.css';


export default class PageUnderConstruction extends Component {
	constructor() {
		super()
		this.state = {};
	}




	render() {
		const gitHubUpdate = this.props.ghub || "GitHub not yet connected, bruh.";
		const btnImage = this.props.btnImage || "X";
		const { closeModule } = this.props;
		const popUpClass = this.props.popUpBool ? "pucContainer" : "pucContainer popUpInactive";

		return (
			<div className={ popUpClass }>
				<div className="pucInnerBoxShadow">
					<div className="moduleTitle">
						<button className="closeModuleBtn"
										onClick={ () => closeModule() }>
							{ btnImage }
						</button>
						Page Under Construction, man! Cant you tell?
					</div>
					<div className="gitHubUpdate">
						{ gitHubUpdate }
					</div>
				</div>
			</div>
		)
	}
}
