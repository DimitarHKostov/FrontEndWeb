let dates = [];

const today = new Date();
const day2 = new Date('12.08.2018');
day2.setHours(21);

dates.push(today);
dates.push(day2);

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function calculate(dates){
    const newArr = [];

    for(let i = 0; i < dates.length; i++){
        const currentPair = [];
        currentPair.push(daysInMonth(dates[i].getMonth(), dates[i].getUTCFullYear()));
        currentPair.push(dates[i].getDay());
        newArr.push(currentPair);
    }

    return newArr;
}

console.log(calculate(dates));