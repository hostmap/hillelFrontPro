"use strict";

function calcCommSalary(dep) {
  let CommSalary = 0;

  if (Array.isArray(dep)) {
  for (let i = 0; i < dep.length; i++) {
    if (typeof dep[i] === "object") {
      CommSalary += calcCommSalary(dep[i]);
    } else if (typeof dep[i] === "number") {
      CommSalary += dep[i];
    }
  }
  } else if (typeof dep === "object") {
    for (let key in dep) {
      if (typeof dep[key] === "object") {
        CommSalary += calcCommSalary(dep[key]);
      } else if (typeof dep[key] === "number") {
        CommSalary += dep[key];
      }
    }
  }
  return CommSalary;
}

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

const CommSalary = calcCommSalary(company);
console.log(CommSalary);
