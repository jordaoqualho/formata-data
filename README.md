# [Formata Data](https://www.npmjs.com/package/formata-data) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jordaoqualho/formata-data/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://www.dataschool.io/how-to-contribute-on-github/)

This package contains a handfull of functions that makes working with dates in javascprit a pice o cake, making possible to parse, validate, manipulate, and formatte dates with ease.

<br />

## Installation

This is a pure javascrip library available through the
[npm registry](https://www.npmjs.com/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
npm install formata-data
```

## Functions

- [getDateDiff](#getdatediff)
- [validateDate](#validatedate)
- [getWritenDate](#getwritendate)
- [dateToString](#datetostring)

<br />

## getDateDiff

Function that takes one or two dates and returns the difference in days between the dates.

```javascript
const { getDateDiff } = require("formata-data");

getDateDiff("03/10/1997", "03/10/2022");
// returns = 9131 (difference in days between dates)

getDateDiff("03/10/1997");
// with only one date, the second one is set as the current date.

getDateDiff("00/10/1997");
// if the date is invalid the function return an error message.
```

<br />

## validateDate

Function that takes one date and returns true if the date is valid and false otherwise.

```javascript
const { validateDate } = require("formata-data");

validateDate("03/10/1997");
// returns true

validateDate("00/10/1997");
// returns false
```

<br />

## getWritenDate

Function that takes one date and returns the writen form of it.

```javascript
const { getWritenDate } = require("formata-data");

getWritenDate("03/10/1997");
// returns October 3th, 1997.

getWritenDate("03/10/1997", "pt");
// can be set to portuguese returning: 03 de Outubro de 1997

getWritenDate("00/10/1997");
// returns an error message if the date is invalid.
```

<br />

## dateToString

Function that takes one date Date format and transform it to string.

```javascript
const { dateToString } = require("formata-data");

dateToString(new Date());
// returns 13/02/2022 (the current date).

dateToString("03/10/1997");
// if the date is not type Date it returns an error message.
```

<br />

### License

Formata Data is [MIT licensed](./LICENSE).
