//  callback function
const a = () => console.log("hello a");
const b = (callback) => {
  console.log("hello b");
  if (1 > 0) callback();
};
b(a);
