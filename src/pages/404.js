import React from 'react';
import SEO from 'src/components/seo';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import './404.scss';

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <Header />
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0469FF" />
      <meta
        name="description"
        content="Eerste Zeeuws-Vlaamse Aero Club"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap" rel="stylesheet" />
      <title>EZAC | 404</title>
    </Helmet>
    <div className="not-found-banner">
      <div className="text">
        <h2>Pagina niet gevonden</h2>
        <p>Het ziet er naar uit dat je een verkeerde link of URL ingegeven hebt. Gebruik de navigatie hierboven om verder te gaan</p>
      </div>
      <h3>PH-404</h3>
    </div>
  </div>
);

export default NotFoundPage;
