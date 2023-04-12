//Run this and see how forEach doesn't work the same way as .map() and .index() do.

let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ];


let testForEach = monthlyProfitLabels.forEach(label => {

	return label

});

console.log(testForEach)