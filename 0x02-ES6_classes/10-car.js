export default Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this.color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}

