module.exports = {
  roots: ["<rootDir>", "<rootDir>/dist"],
  globals: {
    __DEV__: true
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    ".*": "babel-jest"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|json)$",
    "^.+\\.module\\.(css|sass|scss)$",
    "^.+\\.(json)$"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/src/setupEnzyme.ts",
  moduleFileExtensions: ["js", "ts", "tsx"],
  modulePaths: ["<rootDir>", "<rootDir>/dist/"],
  moduleDirectories: ["node_modules", "/dist"],
  testMatch: ["<rootDir>/test/__tests__/**"]
};
