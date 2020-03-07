let numOne;

while (true) {
  numOne = +prompt("Enter number 1");
  if (!isNaN(numOne)) {
    break;
  } else {
    alert("Input incorrect");
    continue;
  }
}

if (numOne > 0) {
  for (let i = numOne; i >= -numOne; i--) {
    if (numOne % i === 0) {
      document.write(i + "<br>");
    }
  }
} else if (numOne < 0) {
  for (let i = numOne; i <= numOne * -1; i++) {
    if (numOne % i === 0) {
      document.write(i + "<br>");
    }
  }
} else {
  document.write(i);
}
