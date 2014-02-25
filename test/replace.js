var test = require("tape").test;

var replace = require("../replace");

test('init', function (t) {
  t.equals(typeof replace, 'function', 'it\'s a function');
  t.end();
});

test('seek', function (t) {
  var obj = {
    aa: '100',
    bb: {cc: [{dd: 110, ee: 120}]},
    ff: [[130], [140]]
  };

  replace(obj, 'aa', 'bb')
  t.equals(obj['aa'], 'bb');
  t.equals(obj['bb']['cc'][0]['ee'], 120);
  replace(obj, 'bb.cc[0].ee', 200);
  t.equals(obj['bb']['cc'][0]['ee'], 200);

  // deep equal
  t.ok(replace(obj, 'bb.jj[0].ee', 200) === undefined);

  t.ok(replace(obj, 'bb.jj[0].ee', 200, true) !== undefined);
  t.equals(obj['bb']['jj'][0]['ee'], 200);
  t.end();
});