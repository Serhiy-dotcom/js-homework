const generator = (num, result = 0, f2 = 1, before = 1, f1 = 1, i = 1) => {
	if (i < 2) return generator(num, 1, f2, before, f1, ++i);
	else if (i <= num)
		return generator(
			num,
			f1,
			(f2 = before),
			(before = f1),
			(f1 += f2),
			++i
		);
	return result;
};
console.log(generator(10));
