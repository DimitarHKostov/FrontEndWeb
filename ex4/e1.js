var person = {
    _salary: 1000,
    getSecretSalaryInfo: function (){
        return this._salary;
    }
};

var stoleSalaryInfo = person.getSecretSalaryInfo;
stoleSalaryInfo = stoleSalaryInfo.bind(person);

console.log(person.getSecretSalaryInfo());

console.log(stoleSalaryInfo());