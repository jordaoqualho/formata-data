const { isTypeDate, toMonthDayYear } = require("./helpers/functions");

const getDateDiff = (dateOne, dateTwo = new Date()) => {
  if (!dateOne) throw new Error("Requires at least one date");

  // Validate insert dates
  const testDateOne = isTypeDate(dateOne) ? dateToString(dateOne) : dateOne;
  const testDateTwo = isTypeDate(dateTwo) ? dateToString(dateTwo) : dateTwo;

  if (!validateDate(testDateOne) || !validateDate(testDateTwo)) {
    throw new Error("Invalid date inserted!");
  }

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

  if (typeof dateValue !== "string") return false;

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

const getWritenDate = (date, language = "en") => {
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

const dateToString = (date) => {
  if (!isTypeDate(date)) return "This is not a type date format!";

  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

module.exports = {
  getDateDiff,
  validateDate,
  getWritenDate,
  dateToString,
};
