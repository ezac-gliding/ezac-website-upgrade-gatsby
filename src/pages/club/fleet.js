import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import Page from 'src/components/UI/Page';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';

export default function FleetPage() {
  return (
    <div className="page home">
      <Header lightMode />
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
        <title>EZAC | Vloot</title>
      </Helmet>

      <Page className="offset-from-top">
        <h2>Ontdek onze vloot</h2>
      </Page>
    </div>
  );
}
