const { hello } = require("../src/hello1");

test("test hello1()", () => {
  expect(hello()).toBe("hello");
});
