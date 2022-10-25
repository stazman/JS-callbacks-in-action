//UNCOMMENT TO SEE THIS MESSAGE IN BROWSER... ONLY CODE IN SOLUTION FILE FOR FILTER CAN SHOW IN BROWSER BECAUSE THE CANVAS EXERCISE ONLY USES CONSOLE

// let monthList = document.querySelector(".month-list");

// monthList.textContent = "This exercise is only meant to work in the console"


//COPY/PASTE STARTER CODE (WITH FOR-LOOP):

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

// let selectedQuarter = 1
// let selectedMonths = []
// for(let i = 0; i < allMonths.length; i++){
// 	let month = allMonths[i]
// 	if(month.quarter === selectedQuarter){
// 			selectedMonths.push(month)
// 	}
// }

// console.log(selectedMonths)


//YOUR WORK STARTER CODE:

let allMonths = [
	{ name: 'January', revenue: 10, expenses: 5, quarter: 1 },
	{ name: 'February', revenue: 7, expenses: 8, quarter: 1 },
	{ name: 'March', revenue: 15, expenses: 3, quarter: 1 } ,
	{ name: 'April', revenue: 20, expenses: 18, quarter: 2 } ,
	{ name: 'May', revenue: 25, expenses: 17, quarter: 2 } ,
	{ name: 'June', revenue: 19, expenses: 18, quarter: 2 },
	{ name: 'July', revenue: 20, expenses: 20, quarter: 3 } ,
	{ name: 'August', revenue: 19, expenses: 20, quarter: 3 },
	{ name: 'September', revenue: 21, expenses: 23, quarter: 3 },
	{ name: 'October', revenue: 21, expenses: 20, quarter: 4 },
	{ name: 'November', revenue: 21, expenses: 20, quarter: 4 },
	{ name: 'December', revenue: 18, expenses: 20, quarter: 4 }
]

// After completing the exercise, try changing this number to 2:
let selectedQuarter = 1;

let selectedMonths = null; // <-- replace null

console.log(selectedMonths)
