module.exports = {
  plugins: [{
    resolve: "gatsby-theme-portfolio-minimal",
    options: {
      siteUrl: "https://cmupoker.club", // Used for sitemap generation
      manifestSettings: {
        favicon: "./content/images/logo.png", // Path is relative to the root
        siteName: "CMU Poker Club Website", // Used in manifest.json
        shortName: "CMU Poker Club", // Used in manifest.json
        startUrl: "/", // Used in manifest.json
        backgroundColor: "#FFFFFF", // Used in manifest.json
        themeColor: "#000000", // Used in manifest.json
        display: "minimal-ui", // Used in manifest.json
      },
      contentDirectory: "./content",
      blogSettings: {
        path: '/blog', // Defines the slug for the blog listing page
        usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
      },
    },
  }, ],
};