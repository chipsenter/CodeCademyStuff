class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
  
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior++;
    }
  }

  class Cat {
    constructor(name, usesLitter) {
      this._name = name;
      this._usesLitter = usesLitter;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
  
    get behavior() {
      return this._behavior;
    }
  
    get usesLitter() {
      return this._usesLitter;
    }
  
    incrementBehavior() {
      this._behavior++;
    }
  }