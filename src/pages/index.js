import React, { useEffect, useMemo } from 'react';
import { Helmet } from "react-helmet"
import Container from 'src/components/UI/Container';
import Header from 'src/components/header/Header';
import './home.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';

export default () => (
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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap" rel="stylesheet" />
      <title>EZAC</title>
    </Helmet>
  </div>
);
