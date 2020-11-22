class Item{
    constructor(name, discount){
        this.name = name;
        this.discount = discount;
    }
    
    applyDiscount(){
        return Item.prototype.getPrice() - parseFloat(this.discount) / 100 * Item.prototype.getPrice();
    }
  };
  
  Item.prototype.getPrice = () => {return 1000};
  
  const item1 = new Item("qbulka", 10);
  console.log(item1.applyDiscount());