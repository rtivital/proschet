# Proschet
Микробиблиотека для склонения слов в русском языке.

```js
import proschet from 'proschet';

const stars = ['звезда', 'звезды', 'звёзд'];
const getStars = proschet(stars);


console.log(getStars(0)); // звёзд
console.log(getStars(1)); // звёзда
console.log(getStars(2)); // звёзды
console.log(getStars(5)); // звёзд
console.log(getStars(21)); // звёзда
console.log(getStars(22)); // звёзды

// У этого репозитория 5 звёзд
console.log(`У этого репозитория 5 ${getStars(5)}`);

// У этого репозитория 5 прекрасных звёзд
console.log(`У этого репозитория 5 прекрасных ${getStars(5)}`);
```
