import 		React,
				{	Component	} from 'react';
import 		PropTypes from 'prop-types';
import 	{	BrowserRouter as Router,
					Route,
					Link	} from 'react-router-dom';
import 		GitHubWidget from './GitHubWidget';
import './css/gitHubWidget.css';
import './css/pageUnderConstruction.css';



export default class PageUnderConstruction extends Component {
	constructor() {
		super()
		this.state={}
		
		this.openNewBrowserTab = this.openNewBrowserTab.bind(this)
	};

	openNewBrowserTab() {
		const { gitHubProfile, gitHubRepo } = this.props.userCreds;

		window.open(`https://github.com/${gitHubProfile}/${gitHubRepo}`)
	};


	render() {
		const btnImage = this.props.btnImage || "X";
		const { gitHubProfile, gitHubRepo, BTC_address, ETH_address } = this.props.userCreds;
		const userCreds = this.props.userCreds;

		return (
			<div className="pop_up_barrier">
				<div className="puc_container">
					<Link to={{ pathname: '/home' }}>
						<button className="close_module_btn">
							{ btnImage }
						</button>
					</Link>
					<div className="statement_box">
						<p>Page Under Construction</p>
						<p>This is my personal webpage and is still very much in the works.</p>
						<p>Please forgive the mess.</p>
					</div>

					<GitHubWidget userCreds={ userCreds }/>
					<button className="git_hub_repo_link"
									onClick={ () => this.openNewBrowserTab() }>
						Check out my GitHub repository
					</button>

					<div className="crypto_coin_address_Container">
						<div className="crypto_coin_address">
							BTC: { BTC_address }
						</div>
						<div className="crypto_coin_address">
							ETH: { ETH_address }
						</div>
					</div>
				</div>
			</div>
		)
	};
};//


PageUnderConstruction.propsTypes = {
	btnImage: PropTypes.string,
	closeModule: PropTypes.isRequired,
	closeModule: PropTypes.Object,
	popUpBool: PropTypes.isRequired,
	popUpBool: PropTypes.bool,
	userCreds: PropTypes.isRequired,
	userCreds: PropTypes.object
}