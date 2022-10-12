export const getRandomFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)];

export const getRelativeBoundingClientRect = (parent, node) => {
  const nbr = node.getBoundingClientRect();
  const pbr = parent.getBoundingClientRect();
  return {
    top: nbr.top - pbr.top,
    bottom: nbr.bottom - pbr.bottom,
    right: nbr.right - pbr.right,
    left: nbr.left - pbr.left,
    width: nbr.width,
    height: nbr.height,
  };
};
