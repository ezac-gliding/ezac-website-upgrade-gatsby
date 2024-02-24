import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import Page from 'src/components/UI/Page';
import Hero from 'src/components/hero/Hero';
import ClubValue from 'src/components/home/ClubValue';
import useScroll from 'src/hooks/useScroll';
import ButtonLink from 'src/components/button/ButtonLink';
import BubbleOne from 'components/floating-elements/bubbles/BubbleOne';
import BubbleTwo from 'components/floating-elements/bubbles/BubbleTwo';
import BubbleThree from 'components/floating-elements/bubbles/BubbleThree';
import BigSolidBubble from 'components/floating-elements/bubbles/BigSolidBubble';
import WavyBubble from 'components/floating-elements/bubbles/WavyBubble';
import AngleBubble from 'components/floating-elements/bubbles/AngleBubble';
import ImageBubble from 'components/floating-elements/bubbles/ImageBubble';
import ImageBubbleAlternate from 'components/floating-elements/bubbles/ImageBubbleAlternate';
import OrnamentalBubble from 'components/floating-elements/bubbles/OrnamentalBubble';
import ReactMarkdown from 'react-markdown';
import Footer from 'components/footer/Footer';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useStaticQuery, graphql } from 'gatsby';
import './home.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';
import useViewport from 'hooks/useViewport';

const homepageTextsQuery = graphql`
query {
  allHomepageTextsJson {
    nodes {
      title
      text
      id
      align
      order
      image {
        color
        outline
        shadow
        parallaxSpeed
        source
        useAlternate
        rotation
        imagePosX
        imagePosY
        imgScale
      }
    }
  }
}
`;

const Bubble = ({
  id,
  image,
}) => {
  if (image.useAlternate) {
    return (
      <ImageBubbleAlternate
        id={id}
        hasShadow={image.shadow}
        fill={image.color}
        scale="100%"
        imgScale={image.imgScale}
        src={image.source}
        outlined={image.outline}
        shadowOffset="10px"
        x={image.imagePosX}
        y={image.imagePosY}
      />
    );
  }

  return (
    <ImageBubble
      id={id}
      hasShadow={image.shadow}
      fill={image.color}
      scale="100%"
      imgScale={image.imgScale}
      src={image.source}
      outlined={image.outline}
      shadowOffset="10px"
      x={image.imagePosX}
      y={image.imagePosY}
    />
  );
};

export default function Index() {
  const scrollPosition = useScroll();
  const { isMobile } = useViewport();

  const {
    allHomepageTextsJson: {
      nodes: homepageTexts,
    },
  } = useStaticQuery(homepageTextsQuery);

  const valueStyle = useMemo(() => ({
    transition: 'opacity 0.3s ease-in-out',
  }), [scrollPosition]);

  return (
    <div className="home">
      <Header appearAt={140} />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0469FF" />
        <meta
          name="description"
          content="Eerste Zeeuws-Vlaamse Aero Club"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,700&family=Open+Sans:wght@400;800&display=swap" rel="stylesheet" />
        <title>EZAC | Eerste Zeeuws-Vlaamse Aero Club</title>
      </Helmet>

      <ParallaxProvider>
        {
          isMobile ? '' : (
            <>
              <Parallax
                style={{ top: '320px', left: '50px' }}
                className="floating-bubble"
                speed={-16}
                rotate={[-24, 10]}
              >
                <BubbleTwo scale="30vw" fill="#9DC4FF" accent="white" />
              </Parallax>
              <Parallax
                style={{ top: '-210px', left: '-120px' }}
                className="floating-bubble"
                speed={-28}
                rotate={[-40, 40]}
              >
                <BubbleOne scale="30vw" fill="#244059" accent="white" />
              </Parallax>
              <Parallax
                style={{ top: '420px', right: '-20px' }}
                className="floating-bubble"
                speed={-10}
                rotate={[24, -10]}
              >
                <AngleBubble scale="14vw" fill="#FFF1A7" />
              </Parallax>
              <Parallax
                style={{ top: '80px', right: '-40px' }}
                className="floating-bubble"
                speed={-20}
                rotate={[24, -10]}
              >
                <BigSolidBubble scale="30vw" fill="#9DC4FF" />
              </Parallax>
              <Parallax
                style={{ top: '160px', right: '-80px' }}
                className="floating-bubble"
                speed={-10}
                rotate={[24, -10]}
              >
                <WavyBubble scale="13vw" fill="white" />
              </Parallax>
              <Parallax
                style={{ top: '-290px', right: '-140px' }}
                className="floating-bubble"
                speed={-20}
                rotate={[24, -10]}
              >
                <BubbleThree scale="25vw" fill="#4C6CA4" accent="white" />
              </Parallax>
              <Parallax
                speed={29}
              >
                <Hero />
              </Parallax>
            </>
          )
        }

        {
          isMobile ? (
            <Hero />
          ) : ''
        }

        <div className="wide-page">
          <div className="wrapper" style={{ position: 'relative', zIndex: 1 }}>
            <p className="call-to-action-text">
              Leer&nbsp;
              <strong>vliegen</strong>
              &nbsp;aan de EZAC
            </p>

            <ButtonLink href="./prices" className="cta-button">Ontdek onze tarieven</ButtonLink>

            <div style={valueStyle} className="club-values">
              <ClubValue title="Teamwork">
                Zweefvliegen is een sport
                <strong> die je samen met de andere clubleden doet. </strong>
                We vliegen in de periode van de zomertijd (eind maart tot en met eind oktober) In de winterperiode doen we in clubverband het nodige onderhoud
              </ClubValue>
              <ClubValue title="Instructie">
                Je zweefvliegopleiding begint meteen met een vlucht in een 2-zitter met instructeur.
                <strong> Voor de lessen hoef je niet extra te betalen. </strong>
                De lesvluchten worden elke ochtend in de weekenden gevlogen.
              </ClubValue>
              <ClubValue title="Contributie">
                Onze contributie is een all-in formule. Je vliegt voor je jaarlijkse contributie een heel vliegseizoen en
                <strong> je betaalt niet extra voor je starts en lesvluchten. </strong>
                Als je eerst wilt proberen dan kan dat ook. Hiervoor kun je met een 10-rittenkaart in 10 starts kijken of het zweefvliegen iets voor jou is. Je doet tijdens die 10 vluchten volwaardig mee
              </ClubValue>
            </div>
          </div>

          <div className="block" style={{ backgroundColor: '#FFF1A7', paddingBottom: isMobile ? 380 : 200, marginTop: 150 }}>
            <Parallax
              speed={isMobile ? 0 : -1}
            >
              <svg className="wavy-pattern" width="100vw" viewBox="0 0 1512 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M298 148.689C254.5 22.6888 155 -38.3112 -3 25.6887V504.5H1512V323.189C1313.5 180.189 1185.5 298.189 1058 399.189C930.5 500.189 834 424.189 797 357.189C760 290.189 688 220.689 556.5 271.189C425 321.689 341.5 274.689 298 148.689Z" fill="#FFF1A7" />
              </svg>
            </Parallax>
            <div className="wrapper">
              <Parallax
                style={{
                  top: -120,
                  right: 'unset',
                  left: -180,
                  zIndex: isMobile ? 0 : 1, // On mobile you want images to be seen instead of having the bubble in your face
                }}
                className="floating-bubble"
                speed={isMobile ? 0 : -5}
                rotate={[-70, -100]}
              >
                <OrnamentalBubble scale="720px" fill="#244059" />
              </Parallax>

              <div className="content" style={{ alignItems: 'flex0end' }}>
                <div className="story-block" style={{ color: 'white' }}>
                  <h1>Wat is zweefvliegen</h1>
                  <p>
                    Zweefvliegen is een sport voor
                    <strong> liefhebbers. </strong>
                    Wanneer je zo vrij als een vogel met de
                    kracht van de natuur boven het landschap zweeft ontdek je dat vanzelf.
                  </p>
                  <p>
                    Je wordt met
                    een lier naar boven getrokken waarna je vlucht begint. Je cirkelt naar boven en glijdt
                    weer rustig naar beneden. Je kunt zo
                    <strong> uren aan een stuk </strong>
                    aan het genieten zijn en soms wel
                    <strong> honderden kilometers ver zweven. </strong>
                  </p>
                  <p>
                    Als je na een lange vlucht het zweefvliegveld
                    van Axel weer in zicht krijgt voelt het altijd vertrouwd.
                    Elke vlucht die je maakt is uniek en steeds weer een fantastische ervaring.
                  </p>
                </div>
              </div>

              <Parallax
                style={{
                  top: isMobile ? 500 : -50,
                  right: 'unset',
                  left: isMobile ? 0 : 500,
                  zIndex: 3,
                }}
                className="floating-bubble image"
                speed={isMobile ? 0 : 4}
              >
                <ImageBubble
                  hasShadow="true"
                  fill="#244059"
                  x={0}
                  y={-50}
                  scale={isMobile ? '100vw' : '500px'}
                  imgScale="1200px"
                  src="assets/working-together.jpg"
                  outlined="true"
                />
              </Parallax>
            </div>
          </div>

          <div className="block">
            <svg className="wavy-pattern" width="100vw" viewBox="0 25 505 193.7" style={{ top: '-28vw' }}>
              <path d="M504.5,26.9c-6.6-1.2-13.3-1.8-20.2-1.8c-49.9,0-92.5,31.6-108.7,75.9l0,0c-10.8,21.9-22,29-43.9,25.8l0,0 c-2.5-0.3-5.1-0.5-7.6-0.5c-19.2,0-36.3,8.7-47.7,22.3l0,0l0,0c-0.7,0.8-1.3,1.6-2,2.5c-7.7,8.2-19.7,5.5-26-9.2 c0-0.1-0.1-0.2-0.1-0.2c-13.2-29.8-43-50.7-77.7-50.7c-37.2,0-68.7,24-80.1,57.3c0,0,0,0.1-0.1,0.1c-17.1,29.2-39.3,8.9-39.3,8.9 l0,0C39.7,140.8,20.9,130-0.5,129.7v63.9h505V26.9z" fill="white" />
            </svg>
          </div>

          <div className="wrapper">
            {
              homepageTexts.sort((a, b) => a.order - b.order).map(({
                id,
                title,
                text,
                image,
                align,
              }) => (
                <div className="homepage-text" key={id} style={{ flexDirection: align === 'right' ? 'row-reverse' : 'row' }}>
                  {
                    image ? (
                      <Bubble
                        id={id}
                        title={title}
                        text={text}
                        image={image}
                        isMobile={isMobile}
                      />
                    ) : ''
                  }

                  <div className="text" style={{ textAlign: align === 'right' ? 'right' : 'left' }}>
                    <h3>{title}</h3>
                    <p>
                      {text}
                    </p>
                  </div>

                </div>
              ))
            }
          </div>
        </div>
      </ParallaxProvider>
      <Footer />
    </div>
  );
}
