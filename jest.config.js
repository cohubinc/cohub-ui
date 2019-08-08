module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  // testMatch: ["/test/**/*.[jt]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/test/setupEnzyme.ts"
};

// testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
