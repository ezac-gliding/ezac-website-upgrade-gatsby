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
        <title>EZAC</title>
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

        <Page>
          <p className="call-to-action-text">
            Leer&nbsp;
            <strong>vliegen</strong>
            &nbsp;aan de EZAC
          </p>

          <ButtonLink href="./prices" className="cta-button">Ontdek onze tarieven</ButtonLink>

          <div style={valueStyle} className="club-values">
            <ClubValue title="Teamwork">
              Een sport zoals zweefvliegen kan niet bestaan zonder
              <strong> een goede samenwerking tussen clubleden. </strong>
            </ClubValue>
            <ClubValue title="Instructie">
              Er is
              <strong> geen extra kost voor instructie. </strong>
              Je hoeft ook niet op voorhand de theorie te volgen. In het zweefvliegen stap je samen met instructeur in een tweezitter, en ga je dus direct aan de slag met de opleiding.
            </ClubValue>
            <ClubValue title="Minutengeld">
              Het lidgeld is een
              <strong> all-in-formule, </strong>
              wat wilt zeggen dat je niet betaalt voor starts, noch voor het aantal minuten die je vliegt op een bepaald type
            </ClubValue>
          </div>

          <h2>Welkom op de EZAC</h2>
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
        </Page>
      </ParallaxProvider>
      <Footer />
    </div>
  );
}
