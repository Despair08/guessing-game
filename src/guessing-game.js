class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minVal = min;
    this.maxVal = max;
  }

  guess() {
    return Math.round((this.minVal + this.maxVal) / 2);
  }

  lower() {
    return (this.maxVal = Math.round((this.minVal + this.maxVal) / 2));
  }

  greater() {
    return (this.minVal = Math.round((this.minVal + this.maxVal) / 2));
  }
}

module.exports = GuessingGame;
