var isFinite = require('../');
var test = require('tape');

test('returns `true` for finite values', function(t) {
  t.plan(5);

  t.ok(isFinite(0));
  t.ok(isFinite(1));
  t.ok(isFinite(3.14));
  t.ok(isFinite(-1));
  t.ok(isFinite(new Number(0)));
});

test('returns `false` for non-finite values', function(t) {
  t.plan(3);

  t.notOk(isFinite(NaN));
  t.notOk(isFinite(Infinity));
  t.notOk(isFinite(-Infinity));
});

test('returns `false` for non-numeric values', function(t) {
  t.plan(8);

  t.notOk(isFinite(null));
  t.notOk(isFinite(undefined));
  t.notOk(isFinite([]));
  t.notOk(isFinite(true));
  t.notOk(isFinite(new Date));
  t.notOk(isFinite(''));
  t.notOk(isFinite(' '));
  t.notOk(isFinite('2px'));
});

test('returns `true` for numeric string values', function(t) {
  t.plan(3);

  t.ok(isFinite('2'));
  t.ok(isFinite('0'));
  t.ok(isFinite('08'));
});