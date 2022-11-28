const unroll = require("./unroll");

const Square = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  it("unroll(Square) equals ['a','b','c','f','i','h','g','d','e']", function () {
    expect(unroll(Square)).toEqual(['a','b','c','f','i','h','g','d','e']);
  });

});
