let personA = contructPerson("Armia", "female", ["coding", "gaming"], "kheer");
function contructPerson(personName, personGender, personHobbies) {
  return {
    name: personName,
    gender: personGender,
    hobbies: personHobbies,
    eat: function () {
      console.log(meal)
    },
    greet: function () {
      console.log(`Hi I'm ${this.name}`)
    }
  }
}

let idCard1 = {
  name: "Maria Khursheed",
  gender: "female",
  age: 23,
  interests: ["painting", "coding"],
  bio: function () {
    console.log(` ${this.name} is ${this.age} years old. They like ${this.interests}`)
  },
  greet: function () {
    console.log(`Hi I'm ${this.name}`)
  }
}

// let 
function contructIdCards(stdName, stdGender, stdAge, stdInterests) {
  let obj = {
    name: stdName,
    gender: stdGender,
    age: stdAge,
    interests: stdInterests,
    bio: function () {
      console.log(` ${this.name} is ${this.age} years old. They like ${this.interests}`)
    },
    greet: function () {
      console.log(`Hi I'm ${this.name}`)
    }
  };
  return obj;
}

function manufactureCar(carName, carModel, carMileage, carManufacturer, carFeatures) {
  let newCar = {
    name: carName,
    model: carModel,
    mileage: carMileage,
    manufacturer: carManufacturer,
    features: carFeatures,
    testDrive: function () {
      console.log(`${this.name} is going smoothly.`)
    },
  };
  return newCar; // recursion
}
let myCar = manufactureCar();


function wendingMachine(money, numb) {
  let items = [
    {
      name: "Orange Lays",
      price: 40,
    },
    {
      name: "Dairy Milk",
      price: 100,
    },
    {
      name: "Wavy",
      price: 25,
    },
  ]
  let requestedItem = items[numb];
  console.log(requestedItem);
  if (money > requestedItem) {
    return requestedItem
  } else {
    return null
  }
}


// function manufactureMobiles(name, os, version, memory, batteryTimings, releaseDate, features, warranty) {
//   let newPhone = {
//     name: name,
//     system: os,
//     ver: version,
//     mem: memory,
//     battery: batteryTimings,
//     date: releaseDate,
//     feat: features,
//     warr: warranty,
//     testBattery: function () {
//       console.log(`Battery timings is ${this.battery} hours`)
//     }
//   }; return newPhone;
// }
// let myPhone = manufactureMobiles("Vivo Y71", "Android", "Oreo", "16GB", 5, "12-12-2017", ["6.0 inches screen", "Corning Gorilla Glass Protection",
//   "13 MP Rear Camera", "No Fingerprint Sensor"])

  function manufactureMobiles(name, os, version, memory, batteryTimings, releaseDate, features, warranty) {
   return {
      name: name,
      system: os,
      ver: version,
      mem: memory,
      battery: batteryTimings,
      date: releaseDate,
      feat: features,
      warr: warranty,
      testBattery: function () {
        console.log(`Battery timings is ${batteryTimings} hours`)
      }
    };
  }
  let myPhone = manufactureMobiles("Vivo Y71", "Android", "Oreo", "16GB", 5, "12-12-2017", ["6.0 inches screen", "Corning Gorilla Glass Protection",
    "13 MP Rear Camera", "No Fingerprint Sensor"])