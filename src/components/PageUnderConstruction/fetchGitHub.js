export const fetchGitHub = (profile, repo) => {
	return fetch(`https://api.github.com/repos/${profile}/${repo}/commits`)
		.then(res => res.json())
		.then(data => {
			return data.map(log => {
				const currentLog = log.commit
				const timeStamp = currentLog.author.date

				return Object.assign(
					{},
					{ timeStamp:timeStamp, message:currentLog.message }
				)
			})
		})
		.catch(error => console.log(error))
};

