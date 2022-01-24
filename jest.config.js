module.exports = {
  moduleFileExtensions: ["js", "mjs"],
  testMatch: ["**/*test.bs.js", "**/*test.mjs"],
  transform: {
    "^.+.m?js$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(rescript)/)"],
  testEnvironment: "jsdom",
};
