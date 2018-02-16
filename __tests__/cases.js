module.exports = [
  ['General', [
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
    }
  ]],
];
