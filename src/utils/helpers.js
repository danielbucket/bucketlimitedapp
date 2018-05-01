export const stateSet = (componentState,key,val) => {
	componentState.setState({ [key]:val })
}