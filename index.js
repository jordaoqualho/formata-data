export const getDataSimplificada = (data) => {
  const dataAtual = formatarData(new Date());
  const dataNotif = padronizarData(data); // mes/dia/ano
  const mesesDoAno = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const diferenca = calcularDiferencaDasDatas(dataNotif, dataAtual);

  if (diferenca === 0) {
    return data.slice(data.length - 5, data.length);
  } else if (diferenca === 1) {
    return "ontem";
  } else {
    return `${data.slice(0, 2)} ${mesesDoAno[parseInt(data.slice(3, 5)) - 1]}`;
  }
};

const calcularDiferencaDasDatas = (dataInicial, dataFinal) => {
  var data1 = new Date(dataInicial);
  var data2 = new Date(dataFinal);
  var timeDiff = Math.abs(data2.getTime() - data1.getTime()); // transforma as datas em milisegundos e subtrai elas
  var diferencaDasDatas = Math.ceil(timeDiff / (1000 * 3600 * 24)); // transforma os milisegundos em dias
  return diferencaDasDatas;
};

const padronizarData = (data) => {
  const diaMesAno = data.slice(0, 10).toString();
  const dia = diaMesAno.slice(0, 2);
  const mes = diaMesAno.slice(3, 5);
  const ano = diaMesAno.slice(6, 10);
  const mesDiaAno = `${mes}/${dia}/${ano}`;

  return mesDiaAno;
};

const formatarData = (data) => {
  const date = ("0" + data.getDate()).slice(-2);
  const month = ("0" + (data.getMonth() + 1)).slice(-2);
  const year = data.getFullYear();
  const dataFormatada = `${month}/${date}/${year}`;

  return dataFormatada.toString();
};

export const validateDate = (dateValue) => {
  let date = dateValue;
  let ardt = new Array();
  let erro = false;

  var ExpReg = new RegExp(
    "(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}"
  );

  ardt = dateValue.split("/");

  if (dateValue.search(ExpReg) == -1) {
    erro = true;
  } else if (
    (ardt[1] == 4 || ardt[1] == 6 || ardt[1] == 9 || ardt[1] == 11) &&
    ardt[0] > 30
  )
    erro = true;
  else if (ardt[1] == 2) {
    if (ardt[0] > 28 && ardt[2] % 4 != 0) erro = true;
    if (ardt[0] > 29 && ardt[2] % 4 == 0) erro = true;
  }
  if (erro) {
    return false;
  }
  return true;
};
