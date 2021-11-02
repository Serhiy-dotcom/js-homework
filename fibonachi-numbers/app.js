const generator = (num, result = 0, f1 = 1, i = 1) => {
	return i < 3
		? generator(num, 1, f1, ++i)
		: i <= num
		? generator(num, (result += f1), result - f1, ++i)
		: result;
};
console.log(generator(17));
