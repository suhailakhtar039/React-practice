console.log("hello");

a = {
  name: 10,
  age: 40,
  hell: "israel",
};
b = { ...a, wow: "wah" };
b;

fnc = (a, b) => {
  return a + b;
};
console.log(fnc(4, 9));
