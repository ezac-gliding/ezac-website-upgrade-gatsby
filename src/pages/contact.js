/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import useViewport from 'hooks/useViewport';
import './contact.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';
import Page from 'components/UI/Page';
import Button from 'components/button/Button';
import Footer from 'components/footer/Footer';
import getCSRFToken from 'util/token';
import sendMail from 'util/mail';

export default function PricesPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const { isMobile } = useViewport();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);
  const [CSRFToken, setCSRFToken] = useState();

  useEffect(() => {
    getCSRFToken().then((token) => setCSRFToken(token));
  }, []);

  // Handy little util which passes the click through to the input
  // We do this because the label is in the way for a big portion of our inputs
  const focusPreviousSibling = (e) => {
    e.preventDefault();
    e.target.previousElementSibling.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const annotatedMessage = `
      <p style="margin-bottom: 30px">Er werd zojuist een mail verstuurd via het contactformulier van de nieuwe EZAC website.</p>

      <p>Waar komt dit vandaan?
      <p style="margin-bottom: 30px">De nieuwe EZAC website.</p>

      <p>Welk formulier werd ingevuld?</p>
      <p style="margin-bottom: 30px">Het contactformulier op /contact.</p>

      <p style="margin-bottom: 30px">Volgende velden op het formulier werden ingevuld:</p>

      <p>[Naam en voornaam]: ${name}</p>
      <p>[E-mail]: ${email}</p>
      <p>[Mobiel]: ${phone}</p>
      <p style="margin-bottom: 30px">[Onderwerp]: ${subject}</p>

      <p>
        [Bericht]:<br />
        ${message}
      </p>
    `;

    sendMail({
      subject: '[WEBSITE] [Contactpagina] Nieuw bericht!',
      message: annotatedMessage,
      type: 'contact',
      CSRFToken,
    }).then((response) => {
      if (response.ok) {
        setIsSubmitted(true);
        return;
      }

      setSubmitFailed(true);
    }).catch((error) => console.error(error));
  };

  return (
    <div className="contact-page">
      <Header />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0469FF" />
        <meta
          name="Contact"
          content="Eerste Zeeuws-Vlaamse Aero Club"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,700&family=Open+Sans:wght@400;800&display=swap" rel="stylesheet" />
        <title>EZAC | Contact</title>
      </Helmet>

      <Page className={isMobile ? 'offset-from-top' : ''}>
        <h2>Contact</h2>
        <h3>Vragen? We helpen je graag verder.</h3>

        {
          !isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className={`${isSubmitted ? 'submitted' : ''}`}
              data-netlify="true"
              name="contact"
              method="POST"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="left">
                <div className="floating-label-field">
                  <input type="text" name="name" placeholder="Name" value={name} onChange={({ target: { value } }) => setName(value)} required />
                  <label onClick={focusPreviousSibling}>Naam & Voornaam*</label>
                </div>
                <div className="floating-label-field">
                  <input type="email" name="email" placeholder="E-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={email} onChange={({ target: { value } }) => setEmail(value)} required />
                  <label onClick={focusPreviousSibling}>E-mail*</label>
                </div>
                <div className="floating-label-field">
                  <input type="text" name="phone" placeholder="Phone" value={phone} onChange={({ target: { value } }) => setPhone(value)} pattern="[\+0-9\s]+" />
                  <label onClick={focusPreviousSibling}>Mobiel</label>
                </div>
                <div className="floating-label-field">
                  <input type="text" name="subject" placeholder="subject" value={subject} onChange={({ target: { value } }) => setSubject(value)} required />
                  <label onClick={focusPreviousSibling}>Onderwerp*</label>
                </div>
              </div>
              <div className="right">
                <textarea name="message" placeholder="Bericht*" value={message} onChange={({ target: { value } }) => setMessage(value)} required />
              </div>

              <div className="form-submit">
                <Button type="submit">Versturen</Button>
                <a href="https://www.ezac.nl/ezac/system/files/Privacyverklaring_EZAC.pdf">Privacyverklaring</a>
              </div>

              {
                submitFailed ? (
                  <div className="message-bubble fail">
                    <p>Er was een probleem tijdens het versturen van het formulier. Gelieve telefonisch contact op te nemen met ons als dit probleem zich blijft voordoen.</p>
                  </div>
                ) : ''
              }
            </form>
          ) : (
            <div className="contact-confirmation">
              <div className="message-bubble success">
                <p>Jouw bericht werd verstuurd! We zullen spoedig contact opnemen met je</p>
              </div>
            </div>
          )
        }

        <h2>Locatie</h2>
        <h3>Hoe kan ik de vliegclub bereiken?</h3>

        <div className="address-box">
          <iframe title="address" style={{ border: 0 }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhzMDpTiAw0cRL2OmMzvncSA&key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`} />
          <div className="details">
            <h3>
              <strong>Justaasweg 5</strong>
              <br />
              <strong>4571 NB Axel</strong>
              <br />
              Nederland
            </h3>
            <p>
              De EZAC bevindt zich op het
              <strong> natuurgebied de Smitschorre. </strong>
              De Justaasweg doorkruist dit gebied en laat u toe met de wagen te rijden tot aan de vliegclub.
              Om de club te bereiken rijdt u best via de watertoren het domein binnen.
            </p>

            <p>
              <strong> Let wel: Sommige oudere GPS toestellen sturen u via de Lageweg, </strong>
              maar van die kant staat er een slagboom die de inrit met wagen verhindert.
              We raden aan om via de oostkant de Smitschorre binnen te rijden.
            </p>
          </div>

        </div>
      </Page>
      <Footer />
    </div>
  );
}
