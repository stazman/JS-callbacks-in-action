//SOLUTION FOR CANVAS:



// let allMonths = [
// 		{ name: 'January', revenue: 10, expenses: 5, quarter: 1 },
// 		{ name: 'February', revenue: 7, expenses: 8, quarter: 1 },
// 		{ name: 'March', revenue: 15, expenses: 3, quarter: 1 } ,
// 		{ name: 'April', revenue: 20, expenses: 18, quarter: 2 } ,
// 		{ name: 'May', revenue: 25, expenses: 17, quarter: 2 } ,
// 		{ name: 'June', revenue: 19, expenses: 18, quarter: 2 },
// 		{ name: 'July', revenue: 20, expenses: 20, quarter: 3 } ,
// 		{ name: 'August', revenue: 19, expenses: 20, quarter: 3 },
// 		{ name: 'September', revenue: 21, expenses: 23, quarter: 3 },
// 		{ name: 'October', revenue: 21, expenses: 20, quarter: 4 },
// 		{ name: 'November', revenue: 21, expenses: 20, quarter: 4 },
// 		{ name: 'December', revenue: 18, expenses: 20, quarter: 4 }
// 	]

// 	let selectedQuarter = 1;

// 	let selectedMonths = allMonths.filter(function(month){
// 			return month.quarter === selectedQuarter
// 	});


//SOLUTION SHOWING IN BROWSER BUT DOESN'T WORK IN CANVAS:


// let monthList = document.querySelector(".month-list");

// let allMonths = [
// 	{ name: 'January', revenue: 10, expenses: 5, quarter: 1 },
// 	{ name: 'February', revenue: 7, expenses: 8, quarter: 1 },
// 	{ name: 'March', revenue: 15, expenses: 3, quarter: 1 } ,
// 	{ name: 'April', revenue: 20, expenses: 18, quarter: 2 } ,
// 	{ name: 'May', revenue: 25, expenses: 17, quarter: 2 } ,
// 	{ name: 'June', revenue: 19, expenses: 18, quarter: 2 },
// 	{ name: 'July', revenue: 20, expenses: 20, quarter: 3 } ,
// 	{ name: 'August', revenue: 19, expenses: 20, quarter: 3 },
// 	{ name: 'September', revenue: 21, expenses: 23, quarter: 3 },
// 	{ name: 'October', revenue: 21, expenses: 20, quarter: 4 },
// 	{ name: 'November', revenue: 21, expenses: 20, quarter: 4 },
// 	{ name: 'December', revenue: 18, expenses: 20, quarter: 4 }
// ]

// let selectedQuarter = 1;


// let selectedMonths = allMonths.filter(function(month){

// 	if (month.quarter === selectedQuarter){
// 		let monthLi = document.createElement('li')
// 		monthLi.textContent = `${month.name}: ${month.revenue - month.expenses}`;
// 		monthList.append(monthLi)}
// });
