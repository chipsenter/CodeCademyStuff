class Cat {
    constructor(name, usesLitter) {
      this._name = name;
      this._usesLitter = usesLitter;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
  
    get usesLitter() {
      return this._usesLitter;
    }
  
    get behavior() {
      return this._behavior;
    }  
  
    incrementBehavior() {
      this._behavior++;
    }
  }
  