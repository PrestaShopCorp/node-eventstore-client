function rndNext(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle (arr, from, to) {
  if (!to) {
    to = arr.length - 1;
  }
  if (!from) {
    from = 0;
  }
  const newArr = [...arr];
  if (from >= to) return;
  for (var current = from; current <= to; ++current) {
    var index = rndNext(current, to + 1);
    var tmp = newArr[index];
    newArr[index] = newArr[current];
    newArr[current] = tmp;
  }
  return newArr;
};

module.exports = shuffle;