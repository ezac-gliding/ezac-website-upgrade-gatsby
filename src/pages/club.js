import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import './home.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';

export default function OurClubPage() {
  return (
    <div className="club">
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
        <title>EZAC | Onze Club</title>
      </Helmet>
    </div>
  );
}