module.exports = {
  ci: {
    collect: {
      staticDistDir: "src",
      startServerCommand: "npm start",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
