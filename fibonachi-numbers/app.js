const generator = (num) => {
	let fibList = [],
		f1 = 1,
		f2 = 1,
		before = 1;

	if (num == 1 || num == 2) {
		for (let i = 0; i < 2; i++) {
			fibList.push(1);
		}
		return fibList;
	} else {
		for (let i = 0; i < 2; i++) {
			fibList.push(1);
		}
	}

	for (let i = 3; i <= num; i++) {
		f2 = before;
		before = f1;
		f1 = f1 + f2;
		fibList.push(f1);
	}

	return fibList;
};

console.log(generator(6));
