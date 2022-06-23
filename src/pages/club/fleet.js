import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import Page from 'src/components/UI/Page';
import Glider from 'src/components/glider/Glider';
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
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap" rel="stylesheet" />
        <title>EZAC | Vloot</title>
      </Helmet>

      <Page className="offset-from-top">
        <h2 className="top-title">Ontdek onze vloot</h2>

        <div className="glider-grid">
          {
            gliders.sort(({ order: orderA }, { order: orderB }) => orderA - orderB).map((gliderData) => (
              <Glider key={gliderData.id} data={gliderData} />
            ))
          }
        </div>
      </Page>

    </div>
  );
}
