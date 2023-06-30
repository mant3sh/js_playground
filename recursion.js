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
