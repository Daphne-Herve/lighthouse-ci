module.exports = {
  ci: {
    collect: {
      staticDistDir: "src",
      url: ["http://localhost:4000/"],
      startServerReadyPattern: "Server is running on PORT 4000",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
