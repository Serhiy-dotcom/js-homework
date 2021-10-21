function fetchUser(id, callback) {
	const users = {
		1: {
			uid: 1,
			name: "John Doe",
			age: 22,
		},
	};

	const selectedUser = users[id];

	const error = selectedUser ? null : "No User Found";

	setTimeout(function () {
		callback(error, selectedUser);
	}, 2000);
}

const promisify = (fn) => {
	return function (id) {
		return new Promise((resolve, reject) => {
			fn(id, function (error, selectedUser) {
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
