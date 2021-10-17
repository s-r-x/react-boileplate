module.exports = {
  preset: "ts-jest",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
    "@testing$": "<rootDir>/src/testing/index.tsx",
    "\\.(css|less)$": "identity-obj-proxy"
  },
};
