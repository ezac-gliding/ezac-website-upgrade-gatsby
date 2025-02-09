import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import ButtonLink from 'src/components/button/ButtonLink';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import OrnamentalBubble from 'components/floating-elements/bubbles/OrnamentalBubble';
import ImageBubble from 'components/floating-elements/bubbles/ImageBubble';
import ImageBubbleAlternate from 'components/floating-elements/bubbles/ImageBubbleAlternate';
import useViewport from 'hooks/useViewport';
import { useStaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Footer from 'components/footer/Footer';
import './club.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';

const clubTextsQuery = graphql`
query {
  allClubStoriesJson {
    nodes {
      alignRight
      order
      spaceBelow
      backgroundColor
      content
      id
      image {
        color
        fromRight
        imagePosX
        imagePosY
        outline
        shadow
        parallaxSpeed
        source
        useAlternate
        xOffset
        yOffset
        imageScale
      }
      wavyPattern
      bubble {
        color
        fromRight
        parallaxSpeed
        rotationEnd
        rotationStart
        scale
        xOffset
        yOffset
      }
      textColor
    }
  }
}
`;

const fleetMarkdownText = '# Ontdek onze vloot\n\nNeem een kijkje naar wat we in huis hebben van vliegtuigen in onze hangaars.';

export default function OurClubPage() {
  const { isMobile } = useViewport();

  const {
    allClubStoriesJson: {
      nodes: clubTexts,
    },
  } = useStaticQuery(clubTextsQuery);

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
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,700&family=Open+Sans:wght@400;800&display=swap" rel="stylesheet" />
        <title>EZAC | Onze Club</title>
      </Helmet>

      <div className="wide-page">
        <ParallaxProvider>
          <div className="hero">
            <div className="wrapper no-padding">
              {
                isMobile ? '' : (
                  <>
                    <Parallax
                      style={{ top: '-52px', left: '55px' }}
                      className="floating-bubble"
                      speed={-4}
                      rotate={[-24, 10]}
                    >
                      <OrnamentalBubble scale="50px" fill="#9DC4FF" />
                    </Parallax>
                    <Parallax
                      style={{ top: '-48px', left: '45px' }}
                      className="floating-bubble"
                      speed={-7}
                      rotate={[-180, -60]}
                    >
                      <OrnamentalBubble scale="42px" fill="#4C6CA4" />
                    </Parallax>
                  </>
                )
              }

              <p className="hero-title">
                &ldquo;We zijn een&nbsp;
                <strong>zweef&shy;vlieg&shy;club</strong>
                &nbsp;waar alle werk&shy;zaam&shy;heden&nbsp;
                <strong>
                  door de le&shy;den zelf
                </strong>
                &nbsp;worden uitgevoerd.&rdquo;
              </p>

              {
                isMobile ? '' : (
                  <>
                    <Parallax
                      style={{ top: '240px', right: '70px' }}
                      className="floating-bubble"
                      speed={3}
                      rotate={[-180, -60]}
                    >
                      <OrnamentalBubble scale="50px" fill="#4C6CA4" />
                    </Parallax>
                    <Parallax
                      style={{ top: '220px', right: '80px' }}
                      className="floating-bubble"
                      speed={5}
                      rotate={[-140, -60]}
                    >
                      <OrnamentalBubble scale="60px" fill="#244059" />
                    </Parallax>
                  </>
                )
              }
            </div>
          </div>

          {
            clubTexts.sort(({ order: orderA }, { order: orderB }) => orderA - orderB).map(({
              id,
              content,
              alignRight,
              backgroundColor,
              textColor,
              bubble,
              image,
              wavyPattern,
              spaceBelow,
            }) => (
              <div key={id} className="block" style={{ backgroundColor, paddingBottom: isMobile ? 380 : spaceBelow }}>
                {
                  wavyPattern ? (
                    <Parallax
                      speed={0}
                    >
                      {
                        wavyPattern === 'pattern-1' ? (
                          <svg className="wavy-pattern" width="100vw" viewBox="0 0 1512 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M298 148.689C254.5 22.6888 155 -38.3112 -3 25.6887V504.5H1512V323.189C1313.5 180.189 1185.5 298.189 1058 399.189C930.5 500.189 834 424.189 797 357.189C760 290.189 688 220.689 556.5 271.189C425 321.689 341.5 274.689 298 148.689Z" fill={backgroundColor} />
                          </svg>
                        ) : ''
                      }

                      {
                        wavyPattern === 'pattern-2' ? (
                          <svg className="wavy-pattern" width="100vw" viewBox="0 25 505 193.7">
                            <path d="M504.5,26.9c-6.6-1.2-13.3-1.8-20.2-1.8c-49.9,0-92.5,31.6-108.7,75.9l0,0c-10.8,21.9-22,29-43.9,25.8l0,0 c-2.5-0.3-5.1-0.5-7.6-0.5c-19.2,0-36.3,8.7-47.7,22.3l0,0l0,0c-0.7,0.8-1.3,1.6-2,2.5c-7.7,8.2-19.7,5.5-26-9.2 c0-0.1-0.1-0.2-0.1-0.2c-13.2-29.8-43-50.7-77.7-50.7c-37.2,0-68.7,24-80.1,57.3c0,0,0,0.1-0.1,0.1c-17.1,29.2-39.3,8.9-39.3,8.9 l0,0C39.7,140.8,20.9,130-0.5,129.7v63.9h505V26.9z" fill={backgroundColor} />
                          </svg>
                        ) : ''
                      }
                    </Parallax>
                  ) : ''
                }
                <div className="wrapper">
                  <Parallax
                    style={{
                      top: bubble.yOffset,
                      right: bubble.fromRight ? `${bubble.xOffset}px` : 'unset',
                      left: !bubble.fromRight ? `${bubble.xOffset}px` : 'unset',
                      zIndex: isMobile ? 0 : 3, // On mobile you want images to be seen instead of having the bubble in your face
                    }}
                    className="floating-bubble"
                    speed={isMobile ? 0 : bubble.parallaxSpeed}
                    rotate={[bubble.rotateStart, bubble.rotateEnd]}
                  >
                    <OrnamentalBubble scale={`${bubble.scale}px`} fill={bubble.color} />
                  </Parallax>

                  <div className={`content ${alignRight ? 'align-right' : ''}`}>
                    <div className="story-block" style={{ color: textColor }}>
                      <ReactMarkdown>
                        {content}
                      </ReactMarkdown>
                    </div>
                  </div>

                  {
                    image.source ? (
                      <Parallax
                        style={{
                          top: `${image.yOffset}px`,
                          right: image.fromRight ? `${image.xOffset}px` : 'unset',
                          left: !image.fromRight ? `${image.xOffset}px` : 'unset',
                          zIndex: 3,
                        }}
                        className="floating-bubble image"
                        speed={isMobile ? 0 : image.parallaxSpeed}
                      >
                        {
                          image.useAlternate ? (
                            <ImageBubbleAlternate
                              id={id}
                              hasShadow={image.shadow}
                              fill={image.color}
                              x={image.imagePosX}
                              y={image.imagePosY}
                              scale={isMobile ? '75vw' : '500px'}
                              imgScale={`${image.imageScale}px`}
                              src={image.source}
                              outlined={image.outline}
                            />
                          ) : (
                            <ImageBubble
                              id={id}
                              hasShadow={image.shadow}
                              fill={image.color}
                              x={image.imagePosX}
                              y={image.imagePosY}
                              scale={isMobile ? '75vw' : '500px'}
                              imgScale={`${image.imageScale}px`}
                              src={image.source}
                              outlined={image.outline}
                            />
                          )
                        }
                      </Parallax>
                    ) : ''
                  }
                </div>
              </div>
            ))
          }

          <div className="block fleet" style={{ backgroundColor: '#9DC4FF', paddingBottom: isMobile ? 30 : 50 }}>
            <Parallax
              speed={0}
            >
              <svg className="wavy-pattern" width="100vw" viewBox="0 25 505 193.7">
                <path d="M504.5,26.9c-6.6-1.2-13.3-1.8-20.2-1.8c-49.9,0-92.5,31.6-108.7,75.9l0,0c-10.8,21.9-22,29-43.9,25.8l0,0 c-2.5-0.3-5.1-0.5-7.6-0.5c-19.2,0-36.3,8.7-47.7,22.3l0,0l0,0c-0.7,0.8-1.3,1.6-2,2.5c-7.7,8.2-19.7,5.5-26-9.2 c0-0.1-0.1-0.2-0.1-0.2c-13.2-29.8-43-50.7-77.7-50.7c-37.2,0-68.7,24-80.1,57.3c0,0,0,0.1-0.1,0.1c-17.1,29.2-39.3,8.9-39.3,8.9 l0,0C39.7,140.8,20.9,130-0.5,129.7v63.9h505V26.9z" fill="#9DC4FF" />
              </svg>
            </Parallax>
            <div className="wrapper">
              <div className="glider-blueprint">
                <img alt="Duo Discus" src="/assets/duo-discus.svg" />
              </div>

              <div className="content">
                <div className="story-block" style={{ color: '#244059' }}>
                  <ReactMarkdown>
                    {fleetMarkdownText}
                  </ReactMarkdown>
                  <ButtonLink href="./club/fleet" className="cta-button">Bekijk de vloot</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </ParallaxProvider>
      </div>
      <Footer />
    </div>
  );
}
