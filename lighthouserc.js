module.exports = {
  ci: {
    collect: {
      staticDistDir: "src",
      startServerCommand: "npm start",
      url: ["http://localhost:4200/"],
      startServerReadyPattern: "Server is running on PORT 4000",
      settings: {
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
