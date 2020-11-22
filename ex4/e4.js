class Person {
    constructor() {
      let _salary = 1000;
  
      this.getSecretSalaryInfo = () => _salary;
    }
  }
  
  const p1 = new Person();
  console.log(p1.getSecretSalaryInfo());