export const fetchGitHub = state => {

	fetch("https://api.github.com/repos/danielbucket/bucketlimitedapp/commits")
		.then(resp => resp.json())



		.then(data => {
			console.log(data)
			return data.map(log => {
				const curLog = log.commit;
				const commitMessage = curLog.message;
				const timeStamp = curLog.author.date;

				return Object.assign(
					{},
					{
						message:commitMessage,
						timeStamp:timeStamp
					}	
				)
			})
		})

		.catch(error => console.log(error))
};

