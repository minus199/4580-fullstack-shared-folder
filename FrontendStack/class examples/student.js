function Student(firstName, lastName, address, ...initialGrades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this._grades = initialGrades;

  Object.defineProperty(this, "grades", {
    get() {
      console.log("get grades");
      let sum = 0;
      for (let i = 0; i < this._grades.length; i++) {
        sum += this._grades[i];
      }

      return sum / this._grades.length;
    },

    set(value) {
      value = value.length ? value : [value];
      this._grades.push(...value);
    }
  });
}

Student.prototype.toString = function() {
  return `
        Student ${this.firstName} ${this.lastName} 
        lives in ${this.address}
        Average: ${this.grades}
    `;
};

x = new Student("Some", "One", "Some Place, Some city", 100, 90, 80);
x.grades = 70;
x.grades = [80, 60, 78];
x.grades;
///////////////////////////////////////////////

class Student {
  constructor(firstName, lastName, address, ...initialGrades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this._grades = initialGrades;
  }

  get grades() {
    console.log("get grades");
    let sum = 0;
    for (let i = 0; i < this._grades.length; i++) {
      sum += this._grades[i];
    }

    return sum / this._grades.length;
  }

  set grades(value) {
    value = value.length ? value : [value];
    this._grades.push(...value);
  }

  toString() {
    return `
                Student ${this.firstName} ${this.lastName} 
                lives in ${this.address}
                Average: ${this.grades}
            `;
  }
}

const student = new Student(
  "Some",
  "One",
  "Some Place, Some city",
  100,
  90,
  80
);
student.grades = 70;
student.grades = [80, 60, 78];
student.grades;
