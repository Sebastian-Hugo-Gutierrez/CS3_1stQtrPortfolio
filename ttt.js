process.stdin.on('data', input => {
  const num = Number(input.toString().trim());
  console.log('You inputted $(num)');
  if (num % 2 == 0 && num >= 2){
  console.log("Not Weird.");
  }
  if (num % 2 == 0 && num <= 5){
  console.log("Not Weird.");
  }
  else if (num >= 6 && num <= 20) {
  console.log("Weird.");
  }
  else {
  console.log("Weird.");
  }
  process.exit();
})