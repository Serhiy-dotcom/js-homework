async function fetchUser(id, callback) {
	const users = {
		1: {
			uid: 1,
			name: "John Doe",
			age: 22,
		},
	};

	const selectedUser = users[id];

	const error = selectedUser ? null : "No User Found";

	return new Promise((resolve) => {
		setTimeout(function () {
			resolve(callback(error, selectedUser));
		}, 2000);
	});
}

const promisify = (fn) => {
	return function (id) {
		return fn(id, function (error, selectedUser) {
			return new Promise((resolve, reject) => {
				if (error) {
					reject(error);
				} else {
					resolve(selectedUser);
				}
			});
		});
	};
};

const promisifiedFetchUser = promisify(fetchUser);
promisifiedFetchUser(1)
	.then((response) => console.log(`User data: ${JSON.stringify(response)}`))
	.catch((error) => console.log(`An error happened: ${error}`));
