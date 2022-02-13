const { isTypeDate, toMonthDayYear } = require("./helpers/functions");

const getDateDiff = (dateOne, dateTwo = new Date()) => {
  // Receive the dates and format to time Date if necessary
  const d1 = isTypeDate(dateOne) ? dateOne : new Date(toMonthDayYear(dateOne));
  const d2 = isTypeDate(dateTwo) ? dateTwo : new Date(toMonthDayYear(dateTwo));

  // Transform the dates in milliseconds and get the diff
  const timeDiff = Math.abs(d1.getTime() - d2.getTime());

  // Return the diference in days
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

const validateDate = (dateValue) => {
  var helper = new Array();
  var erro = false;

  var ExpReg = new RegExp(
    "(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}"
  );

  helper = dateValue.split("/");

  if (dateValue.search(ExpReg) == -1) {
    erro = true;
  } else if (
    (helper[1] == 4 || helper[1] == 6 || helper[1] == 9 || helper[1] == 11) &&
    helper[0] > 30
  )
    erro = true;
  else if (helper[1] == 2) {
    if (helper[0] > 28 && helper[2] % 4 != 0) erro = true;
    if (helper[0] > 29 && helper[2] % 4 == 0) erro = true;
  }
  if (erro) {
    return false;
  }
  return true;
};

const getDataSimplificada = (date, language = "pt") => {
  const formatedDate = isTypeDate(date) ? dateToString(date) : date;

  if (!validateDate(formatedDate))
    return language === "pt"
      ? "Data inserida deve ser no formato dd/mm/yyyy"
      : "Date format must be dd/mm/yyyy";

  const ptList = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const enList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (language === "pt") {
    return `${formatedDate.slice(0, 2)} de ${
      ptList[parseInt(formatedDate.slice(3, 5)) - 1]
    } de ${formatedDate.slice(6, 10)}`;
  } else {
    return `${enList[parseInt(formatedDate.slice(3, 5)) - 1]} ${formatedDate
      .slice(0, 2)
      .replace(0, "")}th, ${formatedDate.slice(6, 10)}`;
  }
};

const dateToString = (data) => {
  const day = ("0" + data.getDate()).slice(-2);
  const month = ("0" + (data.getMonth() + 1)).slice(-2);
  const year = data.getFullYear();
  return `${day}/${month}/${year}`;
};

module.exports = {
  getDateDiff,
  isTypeDate,
  validateDate,
  getDataSimplificada,
  dateToString,
};
