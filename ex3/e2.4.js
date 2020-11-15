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

function cal(date){
    const month = date.getMonth() + 1;
    return date.getDate() + '.' + month + "." + date.getUTCFullYear();
}

function clock(date){
    return date.getHours() + ':' + date.getMinutes() + ':' +  date.getSeconds();
}

function dayOfTheWeek(date){
    switch(date.getDay()) {
        case 0: return 'Неделя'; break;
        case 1: return 'Понеделник'; break;
        case 2: return 'Вторник'; break;
        case 3: return 'Сряда'; break;
        case 4: return 'Четвъртък'; break;
        case 5: return 'Петък'; break;
        case 6: return 'Събота'; break;
          
        default: 'none'; break;
      }
}

function concatenate(dates){
    const newArr = [];

    for(let i = 0; i < dates.length; i++){
        var current = 
        "Дата: " 
        + cal(dates[i]) 
        + ", час: " 
        + clock(dates[i]) 
        + ", " 
        + dayOfTheWeek(dates[i]) 
        + '. ' 
        + daysInMonth(dates[i].getMonth(), dates[i].getUTCFullYear()) 
        + ' дни';

        newArr.push(current);
    }

    return newArr;
}

console.log(concatenate(dates));