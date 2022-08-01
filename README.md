# Formata Data

This package contains a handfull of functions that makes working with dates in javascprit a pice o cake, making possible to parse, validate, manipulate, and formatte dates with ease.

### Installing

```
npm install formata-data
```

## Functions

- [Formata Data](#formata-data)
    - [Installing](#installing)
  - [Functions](#functions)
  - [getDateDiff](#getdatediff)
  - [validateDate](#validatedate)
  - [getWritenDate](#getwritendate)
  - [dateToString](#datetostring)
  - [License](#license)

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

## License

(MIT License)

Copyright (c) 2022 Jordão Qualho

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
