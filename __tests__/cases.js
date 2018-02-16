const obj1 = {
  foo: 'bar'
};

module.exports = [
  ['Single values', [
    {
      name: 'null is null',
      a: null,
      b: null,
      result: true,
    },
    {
      name: 'null is not {}',
      a: null,
      b: {},
      result: false
    },
    {
      name: '1 is 1',
      a: 1,
      b: 1,
      result: true
    },
    {
      name: '[] is []',
      a: [],
      b: [],
      result: true
    },
    {
      name: '[] is {}',
      a: [],
      b: {},
      result: true
    },
  ]],

  ['Simple objects', [
    {
      name: 'Same object',
      a: obj1,
      b: obj1,
      result: true
    },
    {
      name: 'Single key',
      a: {foo: 'bar'},
      b: {foo: 'bar'},
      result: true
    },
    {
      name: 'Single key not equal',
      a: {foo: 'bar'},
      b: {foo: 'bar2'},
      result: false
    },
    {
      name: 'Multiple keys',
      a: {bar: 1, foo: 'bar', baz: false},
      b: {baz: false, foo: 'bar', bar: 1},
      result: true
    },
  ]],

  ['Deep objects', [
    {
      name: 'Simple one level - 1',
      a: {
        a: 1,
        b: {}
      },
      b: {
        a: 1,
        b: {}
      },
      result: false
    },
    {
      name: 'Simple one level - 2',
      a: {
        a: 1,
        b: obj1
      },
      b: {
        a: 1,
        b: obj1
      },
      result: true
    },
  ]]
];
