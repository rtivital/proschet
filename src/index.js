const CASES = [2, 0, 1, 1, 1, 2];


export default function proschet(titles) {
  return function bindedProschet(amount) {
    return titles[
      (amount % 100 > 4 && amount % 100 < 20) ? 2 : CASES[(amount % 10 < 5) ? amount % 10 : 5]
    ];
  };
}
