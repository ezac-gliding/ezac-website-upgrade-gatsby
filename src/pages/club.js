import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import OrnamentalBubble from 'components/floating-elements/bubbles/OrnamentalBubble';
import ImageBubble from 'components/floating-elements/bubbles/ImageBubble';
import ImageBubbleAlternate from 'components/floating-elements/bubbles/ImageBubbleAlternate';
import useViewport from 'hooks/useViewport';
import { useStaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import './club.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';

const clubTextsQuery = graphql`
query {
  allClubTextsJson {
    nodes {
      content
      id
      backgroundColor
      bubble {
        rotationEnd
        rotationStart
        xOffset
        yOffset
        parallaxSpeed
        color
        fromRight
        scale
      }
      image {
        outline
        shadow
        source
        color
        imagePosY
        imagePosX
        fromRight
        xOffset
        yOffset
        parallaxSpeed
      }
    }
  }
}
`;

export default function OurClubPage() {
  const { isMobile } = useViewport();

  const {
    allClubTextsJson: {
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
            <div className="wrapper">
              {
                isMobile ? '' : (
                  <>
                    <Parallax
                      style={{ top: '-52px', left: '-38px' }}
                      className="floating-bubble"
                      speed={-4}
                      rotate={[-24, 10]}
                    >
                      <OrnamentalBubble scale="50px" fill="#9DC4FF" />
                    </Parallax>
                    <Parallax
                      style={{ top: '-48px', left: '-48px' }}
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
                &ldquo;Een unieke&nbsp;
                <strong>vlieg&shy;club</strong>
                &nbsp;waar de le&shy;den alles&nbsp;
                <strong>
                  zelf onder&shy;nemen
                </strong>
                &rdquo;
              </p>

              {
                isMobile ? '' : (
                  <>
                    <Parallax
                      style={{ top: '120px', right: '30px' }}
                      className="floating-bubble"
                      speed={3}
                      rotate={[-180, -60]}
                    >
                      <OrnamentalBubble scale="50px" fill="#4C6CA4" />
                    </Parallax>
                    <Parallax
                      style={{ top: '100px', right: '0' }}
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
            clubTexts.map(({
              id,
              content,
              backgroundColor,
              bubble,
              image,
            }) => (
              <div key={id} className="block space-below" style={{ backgroundColor }}>
                <div className="wrapper">
                  <Parallax
                    style={{
                      top: bubble.yOffset,
                      right: bubble.fromRight ? `${bubble.xOffset}px` : 'unset',
                      left: !bubble.fromRight ? `${bubble.xOffset}px` : 'unset',
                      zIndex: 0,
                    }}
                    className="floating-bubble"
                    speed={bubble.parallaxSpeed}
                    rotate={[bubble.rotateStart, bubble.rotateEnd]}
                  >
                    <OrnamentalBubble scale={`${bubble.scale}px`} fill={bubble.color} />
                  </Parallax>

                  <div className="content">
                    <div className="story-block">
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
                        speed={image.parallaxSpeed}
                      >
                        <ImageBubble
                          hasShadow={image.shadow}
                          fill={image.color}
                          x={image.imagePosX}
                          y={image.imagePosY}
                          scale={isMobile ? '75vw' : '500px'}
                          imgScale="1000px"
                          src={image.source}
                          outlined={image.outline}
                        />
                      </Parallax>
                    ) : ''
                  }
                </div>
              </div>
            ))
          }

          <div className="block blue">
            <Parallax
              speed={0}
            >
              <svg className="wavy-pattern" width="100vw" viewBox="0 0 1512 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M298 148.689C254.5 22.6888 155 -38.3112 -3 25.6887V504.5H1512V323.189C1313.5 180.189 1185.5 298.189 1058 399.189C930.5 500.189 834 424.189 797 357.189C760 290.189 688 220.689 556.5 271.189C425 321.689 341.5 274.689 298 148.689Z" fill="#9DC4FF" />
              </svg>
            </Parallax>

            <div className="wrapper">
              <div className="content align-right">
                <div className="story-block dark">
                  <h3>Hoe ziet een vliegdag er uit?</h3>

                  <p>
                    De EZAC is een club bestaande uit zowel Nederlandse als Belgische leden. Alles binnen de club, van onderhoud aan de vliegtuigen, de lier, het veld, wordt volledig door haar leden ondernomen zonder betrokkenheid van externe partijen.
                  </p>
                  <p>
                    De club en haar leden ondernemen kortom alles zelf en beschikken ook over de nodige expertise. We leren je graag tijdens het winterwerk meer over die technieken, en je leert zelf bij welk onderhoud er bij een zweefvliegtuig hoort, en hoe je dit in de toekomst zelf kan uitvoeren. Tevens een nodige skill voor het bezitten van je eigen toestel.
                  </p>
                </div>
              </div>

              <Parallax
                style={{ top: '-100px', left: '0', zIndex: 3 }}
                className="floating-bubble image"
                speed={4}
              >
                <ImageBubbleAlternate
                  hasShadow
                  outlined
                  fill="#244059"
                  x="-100"
                  y={-50}
                  scale={isMobile ? '75vw' : '540px'}
                  imgScale="800px"
                  src="/assets/westerschelde.jpg"
                />
              </Parallax>
            </div>
          </div>
        </ParallaxProvider>
      </div>
    </div>
  );
}
