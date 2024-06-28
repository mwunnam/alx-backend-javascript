export default class HolbertonCourse {
  constructor(name, length, student) {
    this.name = name;
    this.length = length;
    this.student = student;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get student() {
    return this._studnets;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = value;
}
