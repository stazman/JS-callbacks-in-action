let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
let monthList = document.querySelector('.month-list')

for(let i = 0; i < monthlyProfitLabels.length; i++){
    let label = monthlyProfitLabels[i]
    let monthLi = document.createElement('li')
    monthLi.textContent = label
    monthList.append(monthLi)
}
