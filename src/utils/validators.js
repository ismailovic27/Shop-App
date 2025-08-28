export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
  return password && password.length >= 6;
}

export function validatePrice(price) {
  return !isNaN(price) && Number(price) > 0;
}
