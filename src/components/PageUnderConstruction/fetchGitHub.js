export const fetchGitHub = () => {
	return fetch("https://api.github.com/repos/danielbucket/bucketlimitedapp/commits")
		.then(resp => resp.json())
		.then(data => {
			return data.map(log => {
				const curLog = log.commit;
				const timeStamp = curLog.author.date;

				return Object.assign(
					{},
					{ timeStamp:timeStamp, message:curLog.message }
				)
			})
		})
		.catch(error => console.log(error))

};

