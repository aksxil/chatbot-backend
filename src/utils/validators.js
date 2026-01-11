function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

function isValidDate(value) {
  return !isNaN(Date.parse(value));
}

module.exports = { isValidPhone, isValidDate };
