import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import Page from 'src/components/UI/Page';
import Hero from 'src/components/hero/Hero';
import ClubValue from 'src/components/home/ClubValue';
import './home.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';

export default function Index() {
  return (
    <div className="home">
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
        <title>EZAC</title>
      </Helmet>

      <Hero />

      <Page>
        <div className="club-values">
          <ClubValue title="Teamwork">
            Een sport zoals zweefvliegen kan niet bestaan zonder
            <strong> een goede samenwerking tussen clubleden.</strong>
          </ClubValue>
          <ClubValue title="Minutengeld">
            Het lidgeld is een
            <strong> all-in-formule, </strong>
            wat wilt zeggen dat je niet betaalt voor starts, noch voor het aantal minuten die je vliegt op een bepaald type
          </ClubValue>
          <ClubValue title="Instructie">
            Er is
            <strong> geen extra kost voor instructie.</strong>
            Je hoeft ook niet op voorhand de theorie te volgen. In het zweefvliegen stap je samen met instructeur in een tweezitter, en ga je dus direct aan de slag met de opleiding.
          </ClubValue>
        </div>
      </Page>
    </div>
  );
}
