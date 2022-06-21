import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import Container from 'src/components/UI/Container';
import './styleguide.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';

export default function StyleGuide() {
  return (
    <div className="page styleguide">
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
        <title>EZAC | Styleguide</title>
      </Helmet>

      <Container className="offset-from-top">
        <h1>EZAC Vliegclub</h1>
        <div className="color-palette">
          <span className="primary" />
          <span className="secondary" />
          <span className="dark-blue" />
          <span className="blue" />
          <span className="red" />
        </div>
        <h2>Ontdek onze club</h2>
        <h3>Onze clubleden</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl tortor, rhoncus a cursus quis, porta ac eros. Curabitur non dolor ante. Integer laoreet elit vel viverra laoreet.
        </p>
      </Container>
    </div>
  );
}
