module.exports = {
  testMatch: ["**/*.test.(js|mjs)"],
  testEnvironment: "node",
  testEnvironmentOptions: {
    // nodeのオプションをここで設定する
    nodeOptions: "--experimental-vm-modules",
  },
};
