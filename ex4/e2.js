class Person{
    constructor(name){
        this.name = name;
    }
    
    print(){
        console.log(`Здравей ${this.name} от планетата ${Person.prototype.planet}`);
    }
};

Person.prototype.planet = "Земя";

const p1 = new Person("pesho1");
const p2 = new Person("pesho2");
const p3 = new Person("pesho3");

p1.print();
p2.print();
p3.print();

Person.prototype.planet = "Марс";

p1.print();
p2.print();
p3.print();