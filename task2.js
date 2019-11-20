//myTask 1
/*
class Circle {
    constructor(_radius) {
        this.radius = _radius;

    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(newRadius) {

        this.radius = newRadius;
    }
    get getDiameter() {
        return this.radius * 2;
    }

    getArea() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }
    getLength() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }

}

let circle1 = new Circle(30);

console.log(circle1.getRadius);
console.log(circle1.getDiameter);

console.log(circle1.getArea());
console.log(circle1.getLength());

circle1.setRadius = 52;
console.log(circle1.getArea());
console.log(circle1.getLength());


//circle1.setRadius = +prompt(`Input new radius`);
//myTask 2

class Marker {
  constructor(_color, _amount) {
    this.color = _color;
    this.amount = _amount;
    this.font = "16px";
  }
  inputText() {
    this.text = prompt(`Input your text`);
  }

  printText() {
    let ink = 0.5;
    let maxPrintLength = this.amount / ink;
    let printText = "";
    this.style = "style =";
    if (maxPrintLength >= this.text.length) {
      printText += this.text;
    } else {
      printText += this.text.substring(0, maxPrintLength - 1);
    }

    this.style += `"color : ${this.color}; font-size : ${this.font};"`;
    document.write(`<p ${this.style}>${printText}</p>`);
  }
}
class TankedMarker extends Marker {
  tankMarker() {
    this.amount = 100;
  }
  changeColor() {
    this.color = prompt(`Input new color`);
  }

  changeFont() {
    this.font = prompt(`Input new font-size`);
  }
}
//let markerRed = new Marker("red", 4);
//markerRed.inputText();
//markerRed.printText();
let tankedMarker1 = new TankedMarker("green", 4);
tankedMarker1.inputText();
tankedMarker1.printText();
tankedMarker1.tankMarker();
tankedMarker1.changeColor();
tankedMarker1.printText();
tankedMarker1.changeFont();
tankedMarker1.printText();
*/

//myTask 3
class Employee {
  constructor(_lastName, _position) {
    this.lastName = _lastName;
    this.position = _position;
  }
}

let employees = [];
while (confirm(`Add new employee?`)) {
  let lastName = prompt(`Input last name`);
  let position = prompt(`Input position`);
  employees.push(new Employee(lastName, position));
}

class EmpTable {
  constructor(array) {
    this.arrayEmployees = array;
  }

  getEmployees() {
    console.log(this.arrayEmployees);
  }
  getHtml() {
    let table = `<table style="width:100%; text-align:center">
    <tr>
      <th>First Name</th>
      <th>Last Name</th> 
      <th>Age</th>
      <th>Position</th>
    </tr>`;

    this.arrayEmployees.map(item => {
      let string = `<tr style="text-align:center;">
        
        <td>${item.lastName}</td> 
       
        <td>${item.position}</td>
      </tr>`;

      table += string;
    });

    table += `</table>`;

    document.write(table);
  }
}
let list = new EmpTable(employees);
list.getHtml();

////// not mine ideas
/*
class Marker {
    constructor(_color, _amount) {
        this.color = _color;
        this.amount = _amount;
        this.text = "";
    }

    inputText() {
        this.text = prompt(`Enter text`);
    }

    printText() {
        let textArray = this.text.split("");
        let ink = 0.5;
        let printedStr = "";

        let printedQuantity = this.amount / ink;

        if (printedQuantity >= textArray.length) {
            printedStr = this.text;

        } else {
            printedStr = this.text.substring(0, (printedQuantity - 1));
        }
        document.write(`<p style="color: ${this.color}"> ${printedStr}</p>`);
    }
}



class FillableMarker extends Marker {
    constructor(_color, _amount) {
        super(_color, _amount)
    }
    fillMarker() {
        this.amount = 100;
    }
}

let marker1 = new Marker('red', 5);
marker1.inputText();
marker1.printText();

let marker2 = new FillableMarker("yellow", 5);
marker2.inputText();
marker2.printText();
marker2.fillMarker();

marker2.printText();*/

///task 3
/*
class Employee {
    constructor(_firstName, _lastName, _age, _position) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.position = _position;
    }
}


class EmpTable {
    constructor() {
        this.employees = this.generateEmployees();
    }

    generateEmployees() {

        let employees = [];
        do {
            let firstName = prompt(`Input your first name`);
            let lastName = prompt(`Input your last name`);
            let age = prompt(`Input your age`);
            let position = prompt(`Input your position`);
            let employee = new Employee(firstName, lastName, age, position);
            employees.push(employee);

        } while (confirm(`Add new employee?`));

        return employees;
    }
    getHtml() {
        let table = `<table style="width:100%; text-align:center">
        <tr>
          <th>First Name</th>
          <th>Last Name</th> 
          <th>Age</th>
          <th>Position</th>
        </tr>`;

        this.employees.map((item) => {
            let string = `<tr style="text-align:center;">
            <td>${item.firstName}</td>
            <td>${item.lastName}</td> 
            <td>${item.age}</td>
            <td>${item.position}</td>
          </tr>`;

            table += string;
        });

        table += `</table>`;

        document.write(table);
    }
}

let empTable1 = new EmpTable();
empTable1.getHtml();*/
