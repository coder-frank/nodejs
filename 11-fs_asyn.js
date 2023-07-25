const fs = require('fs');

console.log('Start');
fs.readFile('./content/first.txt', 'utf8', (err,result) => {
	if (err)
	{
		console.log(err);
		return;
	}
	const first = result;
	fs.readFile('./content/first.txt', 'utf8', (err,result) => {
		if (err)
		{
			console.log(err);
			return;
		}
		const second = result;
		fs.writeFile(
			'./content/third.txt',
			`Here is the result : ${first}, ${second}`,
			(err, result) => {
				if (err)
				{
					console.log(err);
					return;
				}
				console.log('Done with this task');
			}
		)
	})
})
console.log('Starting next task');