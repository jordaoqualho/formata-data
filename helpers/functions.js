const toMonthDayYear = (data) => {
  const dayMonthYear = data.slice(0, 10).toString();
  const day = dayMonthYear.slice(0, 2);
  const month = dayMonthYear.slice(3, 5);
  const year = dayMonthYear.slice(6, 10);
  return `${month}/${day}/${year}`;
};

const isTypeDate = (date) => {
  try {
    date.getTime();
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  toMonthDayYear,
  isTypeDate,
};
