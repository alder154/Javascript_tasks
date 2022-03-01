try {
    console.log(a);
    let a = 3;
  } catch (err) {
    alert('let перед использованием нужно объявить!');
  };


try {
   let n = 1/0;
   if (n === Infinity) {
        throw err;
  }
} catch (err){
    alert('на ноль делить нельзя!')
};