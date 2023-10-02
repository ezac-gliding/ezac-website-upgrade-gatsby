/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import useViewport from 'hooks/useViewport';
import './contact.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';
import Page from 'components/UI/Page';
import Button from 'components/button/Button';
import Footer from 'components/footer/Footer';

export default function PricesPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const { isMobile } = useViewport();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const encode = (data) => Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  // Handy little util which passes the click through to the input
  // We do this because the label is in the way for a big portion of our inputs
  const focusPreviousSibling = (e) => {
    e.preventDefault();
    e.target.previousElementSibling.focus()
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        phone,
        message,
      }),
    }).then(() => {
      setIsSubmitted(true);
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
        <div className="top-title">
          <h2>Contact</h2>
          <p>Heeft u nog vragen? We helpen je graag verder</p>
        </div>

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
              <input type="text" name="email" placeholder="E-mail" value={email} onChange={({ target: { value } }) => setEmail(value)} required />
              <label onClick={focusPreviousSibling}>E-mail*</label>
            </div>
            <div className="floating-label-field">
              <input type="text" name="phone" placeholder="Phone" value={phone} onChange={({ target: { value } }) => setPhone(value)} pattern="[\+0-9\s]+" />
              <label onClick={focusPreviousSibling}>GSM</label>
            </div>
            <div className="floating-label-field">
              <input type="text" name="subject" placeholder="subject" value={subject} onChange={({ target: { value } }) => setSubject(value)} required />
              <label onClick={focusPreviousSibling}>Onderwerp*</label>
            </div>
          </div>
          <div className="right">
            <div>
              <textarea name="message" placeholder="Bericht*" value={message} onChange={({ target: { value } }) => setMessage(value)} required />
            </div>
          </div>

          <Button type="submit">Versturen</Button>
        </form>
      </Page>
      <Footer />
    </div>
  );
}
