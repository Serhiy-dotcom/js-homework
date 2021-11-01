const generator = (num) => {
	let fibList = [];
	for (
		let i = 1, f2 = 1, f1 = 1, before = 1;
		i <= num;
		i++, f2 = before, before = f1, f1 += f2
	)
		i < 3 ? fibList.push(1) : fibList.push(f1);
	return fibList;
};

console.log(generator(6));
