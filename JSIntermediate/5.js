let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`); // 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(typeof fixedTen);
console.log(fixedTwenty + fixedTen); // this dosen't work because typeof(fixed values) are strings. So the answer is a concatenation of 2 strings.

function currencyAddition(float1, float2) {
  let result = float1 + float2;
  return result.toFixed(2).valueOf();
}

console.log(currencyAddition(tenCents, twentyCents));

// switch statements
function currencyOperation(float1, float2, operation) {
  let result;
  switch (operation) {
    case "+":
      result = float1 + float2;
      break;
    case "-":
      result = float1 - float2;
      break;
    case "*":
      result = float1 * float2;
      break;
    case "/":
      result = float1 / float2;
      break;
  }
  return result.toFixed(2).valueOf();
}

console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true

function numDecimals(float1, float2, operation, decimalpoints) {
  let result;
  switch (operation) {
    case "+":
      result = float1 + float2;
      break;
    case "-":
      result = float1 - float2;
      break;
    case "*":
      result = float1 * float2;
      break;
    case "/":
      result = float1 / float2;
      break;
  }
  return result.toFixed(decimalpoints).valueOf();
}
console.log(numDecimals(0.14, 0.2512, "+", 3));
console.log(numDecimals(0.2512, 2.2, "/", 5));

