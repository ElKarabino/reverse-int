module.exports = function reverse (n) {
    let num = Math.abs(n)
  return Number(num.toString(10).split('').reverse().join(""));
}
