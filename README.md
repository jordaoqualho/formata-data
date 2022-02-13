# formata-data

Functions to facilitate the formatting and use of date in javascript.

### Installing

```
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

This is my first package!
<br />
Feel free if you have any questions or suggestions.
