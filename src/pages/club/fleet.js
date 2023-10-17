import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import Page from 'src/components/UI/Page';
import Glider from 'src/components/glider/Glider';
import Footer from 'components/footer/Footer';
import useViewport from 'hooks/useViewport';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';
import './fleet.scss';

const query = graphql`
  query {
    allGlidersJson {
      nodes {
        id
        blueprint
        callsign
        glide_ratio
        fuselage_length
        empty_weight
        min_sink
        max_speed
        manufacturer
        wing_area
        wing_aspect
        type
        order
        scale
      }
    }
  }
`;

export default function FleetPage() {
  const { isMobile } = useViewport();
  const {
    allGlidersJson: {
      nodes: gliders,
    },
  } = useStaticQuery(query);

  return (
    <div className="fleet">
      <Header />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,700&family=Open+Sans:wght@400;800&display=swap" rel="stylesheet" />
        <title>EZAC | Vloot</title>
      </Helmet>

      <Page className={isMobile ? 'offset-from-top' : ''}>
        <h2 className="top-title">Ontdek onze vloot</h2>

        <p>
          De EZAC bezit een moderne vloot van een- en tweezitters! De toestellen bezitten up-to-date navigatie en hoogwardige instrumenten.
          Elke winter worden de toestellen voorzien van een grondig onderhoud en technisch nazicht.
        </p>

        <h3>
          Alle vliegtuigen van de club
        </h3>

        <div className="glider-grid">
          {
            gliders.sort(({ order: orderA }, { order: orderB }) => orderA - orderB).map((gliderData) => (
              <Glider key={gliderData.id} data={gliderData} />
            ))
          }
        </div>
      </Page>
      <Footer />
    </div>
  );
}
