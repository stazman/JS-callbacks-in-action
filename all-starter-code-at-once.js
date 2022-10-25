//Starter code from the activity and bonus section solution

// Part 1: forEach() [NOTE: renders to HTML]

// let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
// let monthList = document.querySelector('.month-list')

// for(let i = 0; i < monthlyProfitLabels.length; i++){
//     let label = monthlyProfitLabels[i]
//     let monthLi = document.createElement('li')
//     monthLi.textContent = label
//     monthList.append(monthLi)
// }



// Part 2: map() [NOTE: no render to HTML; just console.log()]

// let selectedMonths = [
// 	{ name: 'January', revenue: 10, expenses: 5, quarter: 1 },
// 	{ name: 'February', revenue: 7, expenses: 8, quarter: 1 },
// 	{ name: 'March', revenue: 15, expenses: 3, quarter: 1 }
// ]

// let monthlyProfitLabels = []
// for(let i = 0; i < selectedMonths.length; i++){
// 	let month = selectedMonths[i]
// 	let label = `${month.name}: ${month.revenue - month.expenses}`
// 	monthlyProfitLabels.push(label)
// }

// console.log(monthlyProfitLabels)







// Part 3: filter() [NOTE: no render to HTML; just console.log()]

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



// Part 4: All Together (original from activity) [Supposed to render to HTML but HTML part only started]


// let quarterDropdown = document.querySelector('.quarter-dropdown')

// quarterDropdown.addEventListener('change', function(e){
//     let quarter = parseInt(e.target.value)
//     displayQuarter(quarter)
// })

// function displayQuarter(quarter){
//     let selectedMonths = getSelectedMonths(quarter)
//     let profitLabels = getProfitLabels(selectedMonths)
//     renderLabels(profitLabels)
// }

// function getSelectedMonths(quarter){
//     return allMonths.filter(function(month){
//         return month.quarter === quarter
//     })
// }

// function getProfitLabels(selectedMonths){
//     return selectedMonths.map(function(month){
//         return `${month.name}: ${month.revenue - month.expenses}`
//     })
// }

// function renderLabels(profitLabels){
//     let monthList = document.querySelector('.month-list')
//     monthList.innerHTML = '' // This empties the list before we append new items to it.
//     profitLabels.forEach(function(label){
//         let monthLi = document.createElement('li')
//         monthLi.textContent = label
//         monthList.append(monthLi)
//     })
// }

// let allMonths = [
//     { name: 'January', revenue: 10, expenses: 5, quarter: 1 },
//     { name: 'February', revenue: 7, expenses: 8, quarter: 1 },
//     { name: 'March', revenue: 15, expenses: 3, quarter: 1 } ,
//     { name: 'April', revenue: 20, expenses: 18, quarter: 2 } ,
//     { name: 'May', revenue: 25, expenses: 17, quarter: 2 } ,
//     { name: 'June', revenue: 19, expenses: 18, quarter: 2 },
//     { name: 'July', revenue: 20, expenses: 20, quarter: 3 } ,
//     { name: 'August', revenue: 19, expenses: 20, quarter: 3 },
//     { name: 'September', revenue: 21, expenses: 23, quarter: 3 },
//     { name: 'October', revenue: 21, expenses: 20, quarter: 4 },
//     { name: 'November', revenue: 21, expenses: 20, quarter: 4 },
//     { name: 'December', revenue: 18, expenses: 20, quarter: 4 }
// ]

// displayQuarter(1)



// Part 4: All Together (for refactoring according to the bonus section)


let quarterDropdown = document.querySelector('.quarter-dropdown')

quarterDropdown.addEventListener('change', function(e){
    let quarter = parseInt(e.target.value)
		//get id for each
		//add html to the id
    displayQuarter(quarter)
})

function displayQuarter(quarter){
    let selectedMonths = getSelectedMonths(quarter)
    let profitLabels = getProfitLabels(selectedMonths)
    renderLabels(profitLabels)
}

function getSelectedMonths(quarter){
    return allMonths.filter(function(month){
        return month.quarter === quarter
    })
}

function getProfitLabels(selectedMonths){
    return selectedMonths.map(function(month){
        return `${month.name}: ${month.revenue - month.expenses}`
    })
}

function renderLabels(profitLabels){
    let monthList = document.querySelector('.month-list')
    monthList.innerHTML = '' // This empties the list before we append new items to it.
    profitLabels.forEach(function(label){
        let monthLi = document.createElement('li')
        monthLi.textContent = label
        monthList.append(monthLi)
    })
}

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

displayQuarter(1)





// Part 5: Bonus section solution

// let quarterDropdown = document.querySelector('.quarter-dropdown')

// quarterDropdown.addEventListener('change', function(e){
//     let quarter = parseInt(e.target.value)
//     displayQuarter(quarter)
// })

// let selectedQuarter = 1
// let monthList = document.querySelector('.month-list')

// function displayQuarter(quarter){
//     monthList.innerHTML = '';
//     selectedQuarter = quarter;
//     allMonths
//         .filter(bySelectedQuarter)
//         .map(toProfitLabel)
//         .forEach(renderLabel)
// }

// function bySelectedQuarter(month){
//     return month.quarter === selectedQuarter
// }

// function toProfitLabel(month){
//     return `${month.name}: ${month.revenue - month.expenses}`
// }

// function renderLabel(label){
//     let monthLi = document.createElement('li')
//     monthLi.textContent = label
//     monthList.append(monthLi)
// }
