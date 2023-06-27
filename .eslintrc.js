module.exports = {
  root: true,
  extends: ["@acme/eslint-plugin"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
