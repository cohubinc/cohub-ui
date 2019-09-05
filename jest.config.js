module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    ".*": "babel-jest"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|json)$",
    "^.+\\.module\\.(css|sass|scss)$",
    "^.(css|sass|scss)$",
    "^.+\\.(json)$"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/test/setupTestEnv.ts"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  modulePaths: ["<rootDir>", "<rootDir>/dist/"],
  moduleDirectories: ["node_modules", "/dist"],
  testMatch: ["**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)"]
};
