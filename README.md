# Proschet
[![Build Status](https://travis-ci.org/rtivital/proschet.svg?branch=master)](https://travis-ci.org/rtivital/proschet)
[![Dependency Status](https://dependencyci.com/github/rtivital/proschet/badge)](https://dependencyci.com/github/rtivital/proschet)
[![npm version](https://badge.fury.io/js/proschet.svg)](https://badge.fury.io/js/proschet)

Микробиблиотека для склонения слов в русском языке

### Установка
`npm install --save proschet` или `yarn add proschet`

### Использование
```js
import proschet from 'proschet';

const stars = ['звезда', 'звезды', 'звёзд'];
const getStars = proschet(stars);


console.log(getStars(0));  // звёзд
console.log(getStars(1));  // звезда
console.log(getStars(2));  // звезды
console.log(getStars(5));  // звёзд
console.log(getStars(21)); // звезда
console.log(getStars(22)); // звезды

// У этого репозитория 5 звёзд
console.log(`У этого репозитория 5 ${getStars(5)}`);

// У этого репозитория 5 прекрасных звёзд
console.log(`У этого репозитория 5 прекрасных ${getStars(5)}`);
```
