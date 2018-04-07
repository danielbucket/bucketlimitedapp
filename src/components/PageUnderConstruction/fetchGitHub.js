
export const fetchGitHub = (profile, repo, stateSet) => {

	return fetch(`https://api.github.com/repos/${profile}/${repo}/branches`)
	.then(res => res.json())
	.then(branchesObj => {

		const gitHubWidgetDataObject = branchesObj.map(inititalBranchObj => {
			const branchName = inititalBranchObj.name;
			const { sha } = inititalBranchObj.commit;

			return fetch(`https://api.github.com/repos/${profile}/${repo}/commits?per_page=100&sha=${sha}`)
			.then(res => res.json())
			.then(grabName => grabName.map(commitObj => Object.assign(commitObj, { branchName:branchName }) ))

		})
		return Promise.all(gitHubWidgetDataObject)
			.then(commitsBlob => commitsBlob.map(i => {
				return i.map(commitsObj => {
					const { branchName, html_url } = commitsObj;
					const { message } = commitsObj.commit;
					const { date } = commitsObj.commit.committer;

					return Object.assign(	{},
																{ message:message },
																{ url:html_url },
																{ date:date },
																{ branchName:branchName }
					)
				})
			})
		)
	})
	.then(mes => stateSet("messages", mes))
	.catch(error => stateSet("error", error))

};

