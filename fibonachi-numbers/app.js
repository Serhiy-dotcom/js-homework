const generator = (num, fibList = [], f2 = 1, before = 1, f1 = 1, i = 1) => {
	if (i < 2) return generator(num, [...fibList, 1], f2, before, f1, ++i);
	else if (i <= num)
		return generator(
			num,
			[...fibList, f1],
			(f2 = before),
			(before = f1),
			(f1 += f2),
			++i
		);
	return fibList;
};
console.log(generator(23));
