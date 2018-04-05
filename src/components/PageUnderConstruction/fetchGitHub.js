export const fetchGitHub = (profile, repo, stateSet) => {
	const fetchGitHubBranches = () => {
		fetch(`https://api.github.com/repos/${profile}/${repo}/branches`)
		.then(res => res.json())
		.then(branchesObj => branchesObj.map(i => {
			const branchName = i.name;
			const { sha } = i.commit;

			fetch(`https://api.github.com/repos/${profile}/${repo}/commits?per_page=100&sha=${sha}`)
				.then(res => res.json())
				.then(spackle => {
					// console.log("spackle: ", spackle)

					const branchCommits = spackle.reduce((accu, curVal) => {
						let { commit } = curVal;
						let { message } = commit;
						let { date } = commit.committer;
						// console.log("curVal: ", curVal)

						if (!accu[branchName]) {
							accu[branchName] = {}
						}
						
						Object.assign(accu[branchName], { date:date }, { message:commit.message })
						accu.push(accu[branchName])
						return accu
					}, [])

					console.log("branchCommits: ", branchCommits)
				})
			})
		)
	}

	const fetchGitHubMessages = () => {
		fetch(`https://api.github.com/repos/${profile}/${repo}/commits`)
		.then(res => {
			if (res.ok) { return res.json() }
		})
		// .then(goober => goober.json())
		.then(data => data.map(log => {
			const currentLog = log.commit;
			const timeStamp = currentLog.author.date;

			return Object.assign(
					{},
					{ timeStamp:timeStamp,
						message:currentLog.message }
				)
			})
		)
		.then(mes => stateSet("messages", mes))
		.catch(error => stateSet("error", error))
	}

	fetchGitHubBranches()
	return fetchGitHubMessages()
};

