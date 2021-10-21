const generator = (num) => {
	let f1 = 1,
		f2 = 1,
		before = 1;

	if (num == 1 || num == 2) {
		return 1;
	}

	for (let i = 3; i <= num; i++) {
		f2 = before;
		before = f1;
		f1 = f1 + f2;
	}

	return f1;
};

console.log(generator(3));
