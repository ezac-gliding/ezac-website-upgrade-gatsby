import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import Page from 'src/components/UI/Page';
import Hero from 'src/components/hero/Hero';
import ClubValue from 'src/components/home/ClubValue';
import useScroll from 'src/hooks/useScroll';
import './home.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';

export default function Index() {
  const scrollPosition = useScroll();

  const valueStyle = useMemo(() => ({
    opacity: scrollPosition > 220 ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  }), [scrollPosition]);

  return (
    <div className="home">
      <Header appearAt={290} />
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

      <Hero appearAt={80} scrollPosition={scrollPosition} />

      <Page>
        <div style={valueStyle} className="club-values">
          <ClubValue appearAt={120} title="Teamwork">
            Een sport zoals zweefvliegen kan niet bestaan zonder
            <strong> een goede samenwerking tussen clubleden. </strong>
          </ClubValue>
          <ClubValue appearAt={120} title="Instructie">
            Er is
            <strong> geen extra kost voor instructie. </strong>
            Je hoeft ook niet op voorhand de theorie te volgen. In het zweefvliegen stap je samen met instructeur in een tweezitter, en ga je dus direct aan de slag met de opleiding.
          </ClubValue>
          <ClubValue appearAt={120} title="Minutengeld">
            Het lidgeld is een
            <strong> all-in-formule, </strong>
            wat wilt zeggen dat je niet betaalt voor starts, noch voor het aantal minuten die je vliegt op een bepaald type
          </ClubValue>
        </div>

        <h2>Welkom op de EZAC</h2>
        <h3>Onze club</h3>
        <p>
          EZAC, oftewel de Eerste Zeeuws-Vlaamse Aero Club, is een zweefvliegclub met als thuisveld Axel.
          We hebben een schitterend vliegveld gelegen in het natuurgebied de Smitschorre, een flinke vloot
          met de modernste zweefvliegtuigen, een gezellige kantine en een eigen verenigingscamping.
        </p>

        <h3>Meevliegen</h3>
        <p>
          Als u wilt, kunt met een van onze ervaren vliegers meevliegen, of iemand anders een doopvlucht cadeau doen.
          Reserveer tijdig en op voorhand, want de beschikbare timeslots gaan er snel door.
        </p>

        <h3>Leer zelf zweefvliegen</h3>
        <p>
          Zweefvliegen is een geweldige en voordelige manier van vliegen. Zonder motor vliegen we op de kracht
          van de natuur van thermiekbel naar thermiekbel, soms uren en honderden kilometers ver. Ook zonder wind en thermiek
          kan een zweefvliegtuig vliegen, maar dan niet zo lang. Bij ons kan u genieten van een volledige opleiding.
          Je stapt in met een instructeur die je wegwijs maakt in deze prachtige sport. De EZAC is er voor zowel Nederlandse
          als Belgische zweefvliegers.
        </p>
      </Page>
    </div>
  );
}
