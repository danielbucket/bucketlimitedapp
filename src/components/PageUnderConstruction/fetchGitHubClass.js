export default class fetchGitHubClass {
	constructor(profile,repo,stateSet) {
		this.profile = profile
		this.repo = repo
		this.stateSet = stateSet

		this.name = ""
		this.newBranchCommits = []
	}

	static fetchGitHubBranches() {
		console.log(this.repo)
		fetch(`https://api.github.com/repos/${this.profile}/${this.repo}/branches`)
		.then(res => res.json())
		.then(what => console.log(what))
		.then(branchesObj => branchesObj.map((inititalBranchObj, branchesObj_index) => {
			this.name = { inititalBranchObj };
			const { sha } = inititalBranchObj.commit;

			fetch(`https://api.github.com/repos/${this.profile}/${this.repo}/commits?per_page=100&sha=${sha}`)
				.then(res => res.json())
				.then(returnedBranchCommits => {

					this.newBranchCommits = returnedBranchCommits.map(i => {
						const branchName = branchesObj[branchesObj_index].name;
						const { commit } = i;
						const { message } = commit;
						const { date } = commit.committer;

						return Object.assign(
										{},
										{ name:branchName,
											timeStamp:date,
											message:message }
									)
					})
					// console.log(this.newBranchCommits)
				})
			})
		)
	}

}