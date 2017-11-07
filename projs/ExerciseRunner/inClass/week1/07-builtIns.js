function cl(x) {
   console.log(x);
}


function say() {
   cl (new Date()); // current date and time
   cl (new Date(1390457110008)); //milliseconds since 1970/01/01
   cl (new Date('2013-09-24'));    // from string
   cl (new Date(2013, 8, 24, 9, 37, 42, 999)); // explicit
}

say();
