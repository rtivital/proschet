import test from 'tape';
import proschet from '../lib';

const TEST_NOUN = ['звезда', 'звезды', 'звёзд'];

test('Proschet function tests', (t) => {
  const getStars = proschet(TEST_NOUN);
  t.equal(getStars(0), TEST_NOUN[2], 'counts right for 0');
  t.equal(getStars(1), TEST_NOUN[0], 'counts right for 1');
  t.equal(getStars(2), TEST_NOUN[1], 'counts right for 2');
  t.equal(getStars(3), TEST_NOUN[1], 'counts right for 3');
  t.equal(getStars(5), TEST_NOUN[2], 'counts right for 5');
  t.equal(getStars(21), TEST_NOUN[0], 'counts right for 21');
  t.equal(getStars(22), TEST_NOUN[1], 'counts right for 22');
  t.equal(getStars(22), TEST_NOUN[1], 'counts right for 22');
  t.equal(getStars(25), TEST_NOUN[2], 'counts right for 25');
  t.equal(getStars(25), TEST_NOUN[2], 'counts right for 25');
  t.end();
});
