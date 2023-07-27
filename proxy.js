let obj = {
  i: 0,
};
obj = new Proxy(obj, {
  get: (target, property) => {
    if (property === "i") {
      target[property] += 1;
      return target[property];
    }
  },
  set: (target, property, value) => {
    if (property === "j") {
      if (value > 10) {
        target[property] = value;
      } else {
        console.log("range error");
      }
      return target[property];
    }
  },
});

for (let i = 0; i < 5; i++) {
  console.log(obj.i);
}
obj.j = 9;
console.log(obj);
obj.j = 11;
console.log(obj);
