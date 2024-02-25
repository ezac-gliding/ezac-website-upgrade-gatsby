/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import useViewport from 'hooks/useViewport';
import './prices.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';
import Page from 'components/UI/Page';
import ButtonLink from 'components/button/ButtonLink';
import Button from 'components/button/Button';
import OrnamentalBubble from 'components/floating-elements/bubbles/OrnamentalBubble';
import Footer from 'components/footer/Footer';
import Select from 'components/UI/Select';

const pricesQuery = graphql`
query {
  allPricesJson {
    nodes {
      id
      title
      price
      features {
        description
      }
      currency
      order
      orientation
      color
    }
  }
}
`;

export default function PricesPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscription, setSubscription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);
  const { isMobile } = useViewport();

  const {
    allPricesJson: {
      nodes: prices,
    },
  } = useStaticQuery(pricesQuery);

  const encode = (data) => Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  // Handy little util which passes the click through to the input
  // We do this because the label is in the way for a big portion of our inputs
  const focusPreviousSibling = (e) => {
    e.preventDefault();
    e.target.previousElementSibling.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': 'lidmaatschap',
        name,
        email,
        phone,
        subscription,
      }),
    }).then((response) => {
      if (response.ok) {
        setIsSubmitted(true);
        return;
      }

      setSubmitFailed(true);
    }).catch((error) => console.error(error));
  };

  return (
    <div className="prices-page">
      <Header />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0469FF" />
        <meta
          name="Tarieven"
          content="Eerste Zeeuws-Vlaamse Aero Club"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,700&family=Open+Sans:wght@400;800&display=swap" rel="stylesheet" />
        <title>EZAC | Tarieven</title>
      </Helmet>

      <Page className={`prices-page ${isMobile ? 'offset-from-top' : ''}`}>
        <div className="top-title">
          <h2>Onze tarieven</h2>
          <h3>Ontdek de tarieven en kosten van het zweefvliegen</h3>
        </div>

        <div className="all-prices">
          {
            prices.sort(({ order: orderA }, { order: orderB }) => orderA - orderB).map(({
              id,
              title,
              price,
              currency,
              features,
              color,
              orientation,
            }) => (
              <div key={id} className="price-container">
                <div className="bubble" style={{ transform: `rotate(${orientation}deg)` }}>
                  <OrnamentalBubble scale="230px" fill={color} />
                </div>

                <div className="title">
                  <h3 className="price-name">{title}</h3>
                  <span className="price">
                    {currency}
                    {price}
                  </span>
                </div>

                <div className="spaced-features">
                  <div className="feature-list">
                    {
                      features.map(({ description }) => (
                        <div key={`${id}-${description}`} className="feature">
                          <i className="material-symbols-outlined">check_circle</i>
                          <p>{description}</p>
                        </div>
                      ))
                    }
                  </div>

                  <ButtonLink onClick={() => setSubscription(title)} href="#subscription" className="cta-button">Lid worden</ButtonLink>
                </div>
              </div>
            ))
          }
        </div>

        <h3>Lid worden</h3>
        <section className="costs-section">
          <div className="explanation">
            <p>
              Om te kunnen zweefvliegen moet je rekening houden met een aantal verschillende kostenposten: naast je lidmaatschap zijn er nog
              <strong> twee bijkomende posten:</strong>
            </p>

            <p>
              Om zelfstandig te kunnen zweefvliegen moet je
              <strong> medisch gekeurd </strong>
              worden en om verzekerd te zijn moet je
              <strong> lid zijn van de Koninklijke Nederlandse Vereniging voor Luchtvaart (KNVvL)</strong>
            </p>

            <p>
              Afhankelijk van je leeftijd moet je eens in de 5 jaar of eens in de 2 jaar worden gekeurd. Lidmaatschap van de KNVvL is een jaarlijkse contributie.
            </p>

            <p>
              Voor nieuwe leden hanteren wij daarnaast éénmalig entreegeld.
            </p>

            <p>
              Hier vind je een overzicht van de kosten per jaar. Deze kosten zijn inclusief je lesvluchten je kan het hele vliegseizoen vliegen, er zijn geen kosten per start of per uur en je bent lid van onze vereniging waarbij we naast het vliegen het sociale aspect net zo belangrijk als het vliegen vinden.
            </p>

            <p className="small-letters">
              * Verzekering kost €122,25 voor leden tot 19 jaar.
            </p>
            <p className="small-letters">
              ** Medische keuring is 5 jaar geldig tot 40 jaar. Daarna is het per 3 jaar geldig.
            </p>
          </div>

          <div className="additional-costs-grid">
            <div className="additional-cost">
              <h3>KNVvL (verzekering)</h3>
              <span className="price">€194*</span>
            </div>

            <div className="additional-cost">
              <h3>Medische keuring</h3>
              <span className="price">€80**</span>
            </div>

            <div className="additional-cost">
              <h3>Entreegeld (eenmalig + intropakket)</h3>
              <span className="price">€126</span>
            </div>

            <div className="additional-cost">
              <h3>Totale kostprijs eerste jaar</h3>
              <span className="price">€1.250</span>
            </div>

            {/* <table>
              <thead>
                <tr>
                  <th className="sidebar-corner"> </th>
                  <th>Leden tot 19</th>
                  <th>Leden vanaf 19</th>
                  <th>Leden vanaf 40 jaar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="sidebar-item">KNVvL (verzekering)</td>
                  <td>€122,25</td>
                  <td>€194,00</td>
                  <td>€194,00</td>
                </tr>
                <tr>
                  <td className="sidebar-item">Medische keuring</td>
                  <td>€80-120 (per 5 jaar)</td>
                  <td>€80-120 (per 5 jaar)</td>
                  <td>€80-120 (per 3 jaar)</td>
                </tr>
                <tr>
                  <td className="sidebar-item">Totaalplaatje per jaar</td>
                  <td>€932,25</td>
                  <td>€1024,00</td>
                  <td>€1054,00</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </section>

        <div id="subscription" className="middle-title">
          <h2>Inschrijven</h2>
          <h3>Vul hier jouw gegevens in, dan nemen we spoedig contact op met je</h3>
        </div>

        {
          !isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              data-netlify="true"
              name="lidmaatschap"
              className={`${isSubmitted ? 'submitted' : ''}`}
              method="POST"
            >
              <input type="hidden" name="form-name" value="contact" />

              <Select value={subscription} onChange={setSubscription}>
                <option>Vliegend lid</option>
                <option>Tienrittenkaart</option>
                <option>Huisgenoot/Student</option>
                <option>Donateur</option>
              </Select>

              <div className="floating-label-field">
                <input type="text" name="name" placeholder="Name" value={name} onChange={({ target: { value } }) => setName(value)} required />
                <label onClick={focusPreviousSibling}>Naam & Voornaam*</label>
              </div>
              <div className="floating-label-field">
                <input type="text" name="email" placeholder="E-mail" value={email} onChange={({ target: { value } }) => setEmail(value)} required />
                <label onClick={focusPreviousSibling}>E-mail*</label>
              </div>
              <div className="floating-label-field">
                <input type="text" name="phone" placeholder="Phone" value={phone} onChange={({ target: { value } }) => setPhone(value)} pattern="[\+0-9\s]+" />
                <label onClick={focusPreviousSibling}>Mobiel</label>
              </div>

              <Button type="submit">Inschrijving aanvragen</Button>

              {
                submitFailed ? (
                  <div className="message-bubble fail">
                    <p>Er was een probleem tijdens het versturen van het formulier. Gelieve je aanvraag door te sturen via mail naar: voorzitter@ezac.nl</p>
                  </div>
                ) : ''
              }
            </form>
          ) : (
            <div className="contact-confirmation">
              <div className="message-bubble success">
                <p>Uw aanvraag voor lidmaatschap werd geregistreerd! Wij zullen spoedig contact opnemen met u.</p>
              </div>
            </div>
          )
        }
      </Page>
      <Footer />
    </div>
  );
}
