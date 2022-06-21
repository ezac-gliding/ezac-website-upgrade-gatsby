const path = require('path');

module.exports = {
  siteMetadata: {
    title: `EZAC`,
    siteUrl: `https://ezac.nl`,
    description: `Zweefvliegen in Zeeuws Vlaanderen.`,
    author: `@ezac-dream-team`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
      resolve: 'gatsby-plugin-netlify-cms',
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Eerste Zeeuws-Vlaamse Aero Club",
        short_name: "EZAC",
        start_url: `https://www.ezac.nl`,
        background_color: "#003082",
        theme_color: "#0469FF",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/img/EZAC_logo.svg" // This path is relative to the root of the site.
      },
    },
  ],
};
