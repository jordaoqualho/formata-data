# formata-data

Vários funcões para facilitar a formatação e utiização de datas em javascript.

### Instalação

`npm install formata-data`

### Como usar

```javascript
var buscaCep = require("formata-data");

buscaCep("01001-000", { sync: false, timeout: 1000 })
  .then((endereco) => {
    console.log(endereco);
  })
  .catch((erro) => {
    console.log(
      `Erro: statusCode ${erro.statusCode} e mensagem ${erro.message}`
    );
  });
```

Ou, caso você queira uma requisição síncrona, passe true no segundo parâmetro:

```javascript
var resposta = buscaCep("01001-000", { sync: true });
if (!resposta.hasError) {
  console.log(resposta);
} else {
  console.log(
    `Erro: statusCode ${resposta.statusCode} e mensagem ${resposta.message}`
  );
}
```

O segundo parâmetro da função é um options, nele você pode definir o valor do timeout do request (em milisegundos). Exemplo:

```javascript
buscaCep("01001-000", { timeout: 2000 });
```
