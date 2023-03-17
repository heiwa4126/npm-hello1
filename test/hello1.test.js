const { hello1 } = require("../src/hello1");

test("test hello1()", () => {
  expect(hello1()).toBe("hello");
});
