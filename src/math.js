export function add(a, b) {
  return a + b;
}

export function percentage(part, total) {
  if (total === 0) throw new Error('total must not be zero');
  return Math.round((part / total) * 100);
}
