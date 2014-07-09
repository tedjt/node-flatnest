var test = require("tape").test;

var ddelete = require("../delete");

test('init', function (t) {
  t.equals(typeof ddelete, 'function', 'it\'s a function');
  t.end();
});

test('delete', function (t) {
  var obj = {
    aa: '100',
    bb: {cc: [{dd: 110, ee: 120}]},
    ff: [[130], [140]]
  };

  ddelete(obj, 'aa')
  t.equals(obj['aa'], undefined);
  t.equals(obj['bb']['cc'][0]['ee'], 120);
  ddelete(obj, 'bb.cc[0].ee');
  t.equals(obj['bb']['cc'][0]['ee'], undefined);
  t.equals(obj['bb']['cc'][0]['dd'], 110);

  // deep equal
  t.ok(ddelete(obj, 'bb.jj[0].ee') === undefined);

  t.end();
});
