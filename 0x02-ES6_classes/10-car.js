export default Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const {_brand, _motor, _color } = this;
    return new Car(_brand, _motor, _color);
  }
}

