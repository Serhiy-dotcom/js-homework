const generator = (num, result = 0, f1 = 1) => {
	return num === 0 ? result : generator(num - 1, (result += f1), result - f1);
};
console.log(generator(6));
