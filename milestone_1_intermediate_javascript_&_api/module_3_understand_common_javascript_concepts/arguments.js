function add(a, b) {
  console.log(arguments);

  // convert array
  const params = [...arguments];
  console.log(params);
}

add(2, 4, 8, 5, 6, 9);
