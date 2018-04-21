class Clock {
  
  constructor(iTime) {
    this.clockString = "";
    this.iTime = iTime;
    this.t = new Date();
    this.todayString = [this.t.getFullYear(), this.t.getMonth() + 1, this.t.getDate()];
    this.todayValue = new Date(this.todayString.join(".")).getTime();
    this.timeValue = this.t.getTime();
    this.clockValue = this.timeValue - this.todayValue;
    this.clockValueSecs = Math.floor(this.clockValue / 1000);
    this.todayValueSecs = Math.floor(this.todayValue / 1000);

    this.minutesInHour = 60;
    this.secondsInMinute = 60;

    this.setTime();

    this.hours = Math.floor(this.clockValueSecs / (this.secondsInMinute*this.minutesInHour));
    this.minutes = Math.floor((this.clockValueSecs - this.hours*(this.secondsInMinute*this.minutesInHour)) / this.minutesInHour);
    this.seconds = Math.floor(this.clockValueSecs - ((this.hours * (this.secondsInMinute * this.minutesInHour)) + (this.minutes * this.minutesInHour)));
    
    this.clockStringArr = [this.hours, this.minutes, this.seconds];

    this.updateTime();
  }
  
  hello() {
    console.log("PORG")
  }

  setTime() {
    if (this.iTime) {
      let iTimeArr = this.iTime.split(":");
      console.log("Set clock to : " + iTimeArr)
      let clockValueHourSecs = parseInt(iTimeArr[0]) * 3600;
      let clockValueMinSecs = parseInt(iTimeArr[1]) * 60;
      let clockValueSecsSecs = parseInt(iTimeArr[2]);
      this.clockValueSecs = clockValueHourSecs + clockValueMinSecs + clockValueSecsSecs;
    } 
  }
  
  getTime() {
    this.clockStringArr.forEach((e, i) => {
      if (e < 10) { this.clockStringArr[i] = "0" + e };
    }); 
    this.clockString = this.clockStringArr.join(":");
    return this.clockString;
  }

  updateTime() {
    setInterval(() => { this.clockValueSecs += 1 }, 1000);
  }
   
}

if (typeof module !== "undefined") {
  module.exports = Clock;
}
