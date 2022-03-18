try {
  console.log(a);
  let a = 3;
} catch (err) {
  console.log("let перед использованием нужно объявить!");
}

try {
  let n = 1 / 0;
  if (n === Infinity) {
    throw err;
  }
} catch (err) {
  console.log("на ноль делить нельзя!");
}
