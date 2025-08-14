// ----------------------
// Example with const objects
// ----------------------

const user5 = {
  firstName: "Adarsh",
  lastName: "Singh",
  address: {
    city: "Bangalore",
    pinCode: 876876,
    state: "Karnataka",
    moreDetails: {
      population: 87898989,
      area: "878 sq km"
    }
  },
  area: 15,
  isGraduate: false,
};

// You can modify existing properties or add new ones to a const object
user5.mobileNumber = 232323232; // ✅ Works
console.log("user5 after adding property:", user5);

// ----------------------
// Example with reassigning const
// ----------------------

const user6 = {
  firstName: "Adarsh",
  lastName: "Singh",
  address: {
    city: "Bangalore",
    pinCode: 876876,
    state: "Karnataka",
    moreDetails: {
      population: 87898989,
      area: "878 sq km"
    }
  },
  area: 15,
  isGraduate: false,
};

// ❌ This will cause an error because you can't reassign a const variable
// user6 = {}; // Error: Assignment to constant variable

// If we use let instead of const, reassignment would work

// ----------------------
// Object.seal() example
// ----------------------

let user7Seal = {
  firstName: "Adarsh",
  lastName: "Singh",
  address: {
    city: "Bangalore",
    pinCode: 876876,
    state: "Karnataka",
    moreDetails: {
      population: 87898989,
      area: "878 sq km"
    }
  },
  area: 15,
  isGraduate: false,
};

Object.seal(user7Seal);

// ❌ Cannot add new properties
user7Seal.country = "India"; // ignored

// ❌ Cannot delete properties
delete user7Seal.firstName; // won't delete

// ✅ Can modify existing property values
user7Seal.area = 20;

console.log("After seal:", user7Seal);

// ----------------------
// Object.freeze() example
// ----------------------

let user7Freeze = {
  firstName: "Adarsh",
  lastName: "Singh",
  address: {
    city: "Bangalore",
    pinCode: 876876,
    state: "Karnataka",
    moreDetails: {
      population: 87898989,
      area: "878 sq km"
    }
  },
  area: 15,
  isGraduate: false,
};

Object.freeze(user7Freeze);

// ❌ Cannot add new properties
user7Freeze.country = "India"; // ignored

// ❌ Cannot delete properties
delete user7Freeze.firstName; // won't delete

// ❌ Cannot modify existing properties
user7Freeze.area = 20; // ignored

console.log("After freeze:", user7Freeze);

// ----------------------
// Shallow freeze example
// ----------------------

Object.freeze(user7Freeze);
user7Freeze.address.city = "Delhi"; // ✅ STILL changes because nested objects are not frozen
console.log("Nested change after shallow freeze:", user7Freeze.address.city);

// ----------------------
// Deep freeze function
// ----------------------

function deepFreeze(obj) {
  Object.freeze(obj);

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });

  return obj;
}

let user7DeepFreeze = {
  firstName: "Adarsh",
  lastName: "Singh",
  address: {
    city: "Bangalore",
    pinCode: 876876,
    state: "Karnataka",
    moreDetails: {
      population: 87898989,
      area: "878 sq km"
    }
  },
  area: 15,
  isGraduate: false,
};

deepFreeze(user7DeepFreeze);

// ❌ Won't change
user7DeepFreeze.address.city = "Delhi";
user7DeepFreeze.address.moreDetails.area = "999 sq km";
console.log("After deep freeze:", user7DeepFreeze);

// ----------------------
// Deep seal function
// ----------------------

function deepSeal(obj) {
  Object.seal(obj);

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepSeal(obj[key]);
    }
  });

  return obj;
}

let user8DeepSeal = {
  firstName: "Adarsh",
  lastName: "Singh",
  address: {
    city: "Bangalore",
    pinCode: 876876,
    state: "Karnataka",
    moreDetails: {
      population: 87898989,
      area: "878 sq km"
    }
  },
  area: 15,
  isGraduate: false,
};

deepSeal(user8DeepSeal);

// ✅ Can still change existing value
user8DeepSeal.address.city = "Delhi";

// ❌ Cannot delete property
delete user8DeepSeal.address.city;

// ❌ Cannot add new property
user8DeepSeal.address.newProp = "Test";

console.log("After deep seal:", user8DeepSeal);



const user7 = { name: "Saksham", age: 24 };

console.log("name" in user); // true
console.log("gender" in user); // false

const user8 = { name: "Saksham", age: 24 };

console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("toString")); // false (inherited from Object prototype)
