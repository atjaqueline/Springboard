const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

test('1234', () => {
  let res = addCommas(1234);
  expect(res).toEqual('1,234');
})

test('1000000', () => {
  let res = addCommas(1000000);
  expect(res).toEqual('1,000,000');
})

test('6', () => {
  let res = addCommas(6);
  expect(res).toEqual('6');
})

test('-10', () => {
  let res = addCommas(-10);
  expect(res).toEqual('-10');
})

test('-5678', () => {
  let res = addCommas(-5678);
  expect(res).toEqual('-5,678');
})

test('-3141592.65', () => {
  let res = addCommas(-3141592.65);
  expect(res).toEqual('-3,141,592.65');
})
});