function checkBrackets(str) {
  const stack = [];
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];

  for (var char of str) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      const matchingOpenBracket = openBrackets[closeBrackets.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== matchingOpenBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkBrackets("function someFn() { return [1, 2, 3]; }"));
console.log(checkBrackets("function someFn( { return [1, 2, 3]; }"));
console.log(checkBrackets("function someFn() { return [1, 2, 3; }"));
console.log(checkBrackets("function someFn() { return [1, 2, 3]; }"));
