console.log("recursion");
const obj = {
  a: {
    b: {
      c: [0, 1, 2, 3],
    },
  },
};

function get(obj, path) {
  if (path.length === 0 || path === "") {
    return undefined;
  }
  const excludedkey = ["[", "]", "."];
  let key = [];
  for (let i = 0; i < path.length; i++) {
    if (!excludedkey.includes(path[i])) {
      key.push(path[i]);
    }
  }
  return key.reduce((obj, key) => {
    return obj[key];
  }, obj);
}
console.log(get(obj, ["a", "b", "c", "3"]));
const user = {
  name: "mahantesha",
  city: {
    homeTown: {
      tumkur: {
        locality: "siraGate",
      },
    },
  },
};
const finaloutPut = {};
function microSoft_Interview_Question(obj, address) {
  for (let keys in obj) {
    if (typeof obj[keys] === "object") {
      microSoft_Interview_Question(obj[keys], address + "_" + keys);
    } else {
      finaloutPut[address + "_" + keys] = obj[keys];
    }
  }
}
microSoft_Interview_Question(user, "user");
console.log(finaloutPut);
