export const fetchGitHub = (profile, repo, stateSet) => {
	fetch(`https://api.github.com/repos/${profile}/${repo}/commits`)
		.then(res => {
			if (res.ok) {
				return res.json()
			}
		})
		// .then(goober => goober.json())
		.then(data => {
			return data.map(log => {
				const currentLog = log.commit;
				const timeStamp = currentLog.author.date;

				return Object.assign(
					{},
					{
						timeStamp:timeStamp,
						message:currentLog.message
					}
				);
			})
		})
		.then(mes => stateSet("messages", mes))
		.catch(error => stateSet("error", error))
};

