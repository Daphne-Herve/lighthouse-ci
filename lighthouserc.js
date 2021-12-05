module.exports = {
  ci: {
    collect: {
      staticDistDir: "./src",
      url: ["http://localhost:4200"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
