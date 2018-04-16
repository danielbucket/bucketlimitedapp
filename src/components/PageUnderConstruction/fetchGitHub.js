export const fetchGitHub = (profile,repo,stateSet) => {
	fetch(`https://api.github.com/repos/${profile}/${repo}/branches`)
	.then(resp => resp.json())
	.then(branchesObj => {
		let branchNamesArray = branchesObj.map(branch => {
			return {	branchName:branch.name,
								sha:branch.commit.sha	}
		})
		return Promise.all(branchNamesArray)
		.then(branches => {
			const branchCommitArray = branches.map((branchObject,i) => {
				const { branchName, sha } = branchObject;

				return fetch(`https://api.github.com/repos/${profile}/${repo}/commits?per_page=100&sha=${sha}`)
				.then(res => res.json())
				.then(branchArray => {
					const newBranchCommits = branchArray.reduce((accu,branchCommit) => {
						const { commit } = branchCommit;
						const { message, url } = commit;
						const date = commit.committer.date
						const bName = branchNamesArray[i].branchName;

						if (!accu[bName]) {
							accu[bName] = [];
						}

						const newCommit = {};
						Object.assign(
							newCommit,
							{ branchName:bName },
							{ message:message },
							{	url:url },
							{ date:date }
						)
						accu[bName].push(newCommit)

						return accu
					}, {})
				return newBranchCommits
				})
			})
			return Promise.all(branchCommitArray)
		})
	})
	.then(commitCollection => stateSet('messages', commitCollection))
	.catch(error => {
		const err = { error };
		const errMess = err.error.message;

		return stateSet("error", errMess)
	})
};



