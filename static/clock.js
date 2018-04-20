class Clock {
  
  constructor() {}
  
  hello() {
    return "hello"
  }
}

if (typeof module !== "undefined") {
  module.exports = Clock;
}
