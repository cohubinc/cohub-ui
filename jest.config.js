module.exports = {
  roots: ["<rootDir>"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json"
    }
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|json)$",
    "^.+\\.module\\.(css|sass|scss)$",
    "^.+\\.(json)$"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/test/setupEnzyme.ts",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^dist/(.*)$": "<rootDir>/dist/$1",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ]
};
