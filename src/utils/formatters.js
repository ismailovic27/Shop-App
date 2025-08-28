export function formatCurrency(amount) {
  return `$${Number(amount).toFixed(2)}`;
}

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}

export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
