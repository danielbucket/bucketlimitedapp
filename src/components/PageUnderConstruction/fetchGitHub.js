export const fetchGitHub = () => {
	return fetch("https://api.github.com/repos/danielbucket/bucketlimitedapp/commits")
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

