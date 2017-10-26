const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    set appetizers(appetizer) {
      this._appetizers.push(appetizer);
    },
    set mains(entree) {
      this._mains.push(entree);
    },
    set desserts(dessert) {
      this._desserts.push(dessert);  
    },
    get appetizers() {
      return this._appetizers;
    },
    get mains() { 
      return this._mains;
    },
    get desserts() {
      return this._desserts;
    },
    
      get courses() {
        return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
      },
    
    addDishToCourse(courseName, dishName, dishPrice) {
     const dish = {
       name: dishName,
       price: dishPrice
     };
      
      this._courses[courseName].push(dish);
    },
       
    getRandomDishFromCourse: function (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
          return dishes[randomIndex];   
        
  },
   generateRandomMeal: function () {
     const appetizer = this.getRandomDishFromCourse('appetizers');
     const main = this.getRandomDishFromCourse('mains');
       const dessert = this.getRandomDishFromCourse('desserts');
     const totalPrice = appetizer.price + main.price + dessert.price;
     
     return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is ${totalPrice}.`;
     
   }
   //menu.addDishToCourse('Shrimp Coctail', 'Ribeye', 15.99);
   //menu.addDishToCourse('Mozzarella Sticks', 'Bourbon Barrel Chicken', 12.99)	
   //menu.addDishToCourse('BBQ Chicken Flatbread', 'Sizzling Chicken and Shrimp', 13.99); 
  
  };
  menu.addDishToCourse('appetizers', 'Shrimp Coctail', 6.99);
  menu.addDishToCourse('appetizers', 'Sauteed mushrooms', 5.99);
  menu.addDishToCourse('appetizers', 'Onion Rings', 6.99);
  menu.addDishToCourse('mains', 'Ribeye', 15.99);
  menu.addDishToCourse('mains', 'Meat Balls & Spaghetti', 10.59);
  menu.addDishToCourse('mains', 'Shrimp & Scampi', 17.99);
  menu.addDishToCourse('desserts', 'Strawberry Ice Cream', 7.99);
  menu.addDishToCourse('desserts', 'Mud Pie Brownie', 7.99);
  menu.addDishToCourse('desserts', 'Chocolate Mousse', 7.99);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);