const path = require('path');

module.exports = {
  siteMetadata: {
    title: `EZAC - Eerste Zeeuws-Vlaamse Aero Club`,
    description: `Zweefvliegen in Zeeuws Vlaanderen.`,
    author: `@ezac-dream-team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: 'src/img/Logo_Original.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages')
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      options: {
        path: './src/data/',
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      resolve: `gatsby-plugin-manifest`,
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
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
