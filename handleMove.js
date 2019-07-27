const handleMove = (moves = [], size = 4) => {
  const columns = moves.reduce((acc, cur) => {
    const { count } = acc[cur];
    const newCount = count + 1;
    if (newCount > size) {
      throw new Error("Column is overloaded");
    }
    acc[cur].count = newCount;
    return acc;
  }, new Array(size).fill().map((_, ind) => ({ count: 0, ind })));
  const availableColumns = columns.filter(({ count }) => count < size);
  if (availableColumns.length === 0) {
    throw new Error("Column is overloaded");
  }
  const randomCol = Math.floor(Math.random() * (availableColumns.length - 1));
  return [...moves, availableColumns[randomCol].ind];
};

module.exports = { handleMove };
