/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import useViewport from 'hooks/useViewport';
import dayjs from 'dayjs';
import locale from 'dayjs/locale/nl'; // eslint-disable-line
import Page from 'components/UI/Page';
import Footer from 'components/footer/Footer';
import Button from 'components/button/Button';
import Spinner from 'components/UI/Spinner';
import Checkmark from 'components/UI/Checkmark';
import Error from 'components/UI/Error';
import Select from 'components/UI/Select';
import './book-a-flight.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';

export default function PricesPage() {
  const { isMobile } = useViewport();
  const [slots, setSlots] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const [passengerName, setPassengerName] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('');
  const [formIsSubmitted, setSubmitted] = useState(false);

  const [waitlistSubmitted, setWaitlistSubmitted] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [waitlistSubmitFailed, setWaitlistSubmitFailed] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [busySubmitting, setBusySubmitting] = useState(false);
  const [CSRFToken, setCSRFToken] = useState();

  useEffect(() => {
    setLoading(true);
    dayjs.locale('nl');

    // Get CSRF Token
    fetch(`${process.env.GATSBY_EZAC_API_URL}/session/token`).then((response) => {
      if (response.ok) {
        return response.text();
      }

      return false;
    }).then((token) => setCSRFToken(token));

    // Load in slots
    fetch(`${process.env.GATSBY_EZAC_API_URL}/api/v2/passagiers/slots`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'ezac.nl',
        Authorization: `Basic ${process.env.GATSBY_BASIC_AUTH_KEY}`,
      },
    }).then((response) => {
      if (response.ok) {
        setLoading(false);
        return response.json();
      }

      console.error('Could not fetch available slots');
      setLoading(false);
      setIsError(true);
      return {};
    }).then((result) => {
      setLoading(false);
      setSlots(result);
    }).catch((error) => {
      setIsError(true);
      return console.error(error);
    });
  }, []);

  const availableDays = useMemo(() => {
    // Filter out all days with no more available slots
    const availableSlotsUnformatted = Object.entries(slots).filter(([day, slotsForDay]) => Object.values(slotsForDay).some((slotForDay) => slotForDay === ''));

    return availableSlotsUnformatted.map(([day, slotsForDay]) => ({
      day,
      slots: Object.entries(slotsForDay).map(([hour, occupant]) => ({
        hour,
        isOccupied: occupant !== '',
      })),
    }));
  }, [slots]);

  const selectedHours = useMemo(() => {
    if (selectedDay) {
      return Object.entries(slots[selectedDay]).map(([hour, isOccupied]) => ({
        hour,
        isOccupied,
      }));
    }

    return null;
  }, [selectedDay]);

  const guideToDisplay = useMemo(() => {
    if (formIsSubmitted) {
      return 'Uw vlucht werd geboekt! U zult een bevestiging krijgen in uw mailbox.';
    }

    if (!availableDays.length) {
      return 'Er zijn geen beschikbare slots meer';
    }

    if (availableDays && !selectedDay) {
      return 'Kies een dag';
    }

    if (selectedHours && !selectedHour) {
      return 'Kies een tijdstip';
    }

    return 'Vul je gegevens in';
  }, [selectedHours, selectedHour, selectedDay, availableDays, formIsSubmitted]);

  const focusPreviousSibling = (e) => {
    e.preventDefault();
    e.target.previousElementSibling.focus();
  };

  const scrollTo = (hash) => {
    if (!isMobile) {
      return;
    }

    window.location.hash = `#${hash}`;
  };

  const selectDay = (day) => {
    if (formIsSubmitted) {
      return;
    }

    setSelectedDay(day);
    setSelectedHour(null);
    scrollTo('hours');
  };

  const selectHour = (hour, isOccupied) => {
    if (!isOccupied && !formIsSubmitted) {
      setSelectedHour(hour);
      scrollTo('personal-details');
    }
  };

  const bookFlight = (e) => {
    e.preventDefault();

    if (!selectedDay || !selectedHour || !passengerEmail || !passengerName || !passengerPhone) {
      return;
    }

    setBusySubmitting(true);

    // Load in slots
    fetch(`${process.env.GATSBY_EZAC_API_URL}/api/v2/passagiers?_format=json&naam=${passengerName}&telefoon=${passengerPhone}&email=${passengerEmail}&datum=${selectedDay}&tijd=${selectedHour}`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'ezac.nl',
        Authorization: `Basic ${process.env.GATSBY_BASIC_AUTH_KEY}`,
        'X-CSRF-Token': CSRFToken,
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        setBusySubmitting(false);
        setSubmitted(true);
        setSelectedHour(null);
        setSelectedDay(null);

        return response.json();
      }

      setBusySubmitting(false);
      setIsError(true);
      console.error('Could not book the flight!');
      return {};
    }).catch((error) => {
      setIsError(true);
      return console.error(error);
    });
  };

  const handleSubmitToWaitlist = () => {

  };

  return (
    <div className="book-a-flight-page">
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
        <title>EZAC | Meevliegen</title>
      </Helmet>

      <Page className={isMobile ? 'offset-from-top' : ''}>
        <h2>Vlieg mee</h2>
        <h3>Reserveer een introductievlucht/vlucht voor jezelf, of om cadeau te doen voor iemand anders.</h3>

        <div className="flight-booking-widget">
          {
            isError ? (
              <div className="error-indicator">
                <p>Er is een probleem met ons boekingsysteem...</p>
                <Error />
              </div>
            ) : isLoading ? (
              <div className="loading-indicator">
                <p>Beschikbare data ophalen...</p>
                <Spinner />
              </div>
            ) : (
              <>
                {
                  availableDays.length ? (
                    <div className="day-column">
                      <a id="days" className="hidden anchor" />
                      <span className="column-title">Selecteer dag</span>
                      <div className="days">
                        {
                          availableDays.map(({
                            day,
                          }) => (
                            <span key={day} onClick={() => selectDay(day)} className={`day ${selectedDay === day ? 'selected' : ''}`}>{dayjs(day).format('ddd D MMM')}</span>
                          ))
                        }
                      </div>
                    </div>
                  ) : ''
                }
                {
                  availableDays.length && selectedHours && selectedHours.length ? (
                    <div className="hour-column">
                      <a id="hours" className="hidden anchor" />
                      <span className="column-title">Selecteer uur</span>
                      <div className="hours">
                        {
                          selectedHours.map(({
                            hour,
                            isOccupied,
                          }) => (
                            <span key={hour} onClick={() => selectHour(hour, isOccupied)} className={`hour ${isOccupied ? 'occupied' : 'free'} ${selectedHour === hour ? 'selected' : ''}`}>{hour}</span>
                          ))
                        }
                      </div>
                    </div>
                  ) : ''
                }
                <div className="guide">
                  <a id="personal-details" className="hidden anchor" />
                  {
                    selectedHour && selectedDay && !formIsSubmitted ? (
                      <p className="selected-date-summary">
                        {dayjs(selectedDay).format('dddd D MMMM')} om {selectedHour}
                      </p>
                    ) : ''
                  }
                  <p>{guideToDisplay}</p>
                  {
                    formIsSubmitted ? (
                      <Checkmark />
                    ) : ''
                  }
                  {
                    selectedHour && selectedDay && !formIsSubmitted ? (
                      <form id="personal-details" onSubmit={bookFlight}>
                        <div className="floating-label-field">
                          <input type="text" name="passenger-name" placeholder="Naam" value={passengerName} onChange={({ target: { value } }) => setPassengerName(value)} required />
                          <label onClick={focusPreviousSibling}>Naam*</label>
                        </div>
                        <div className="floating-label-field">
                          <input type="text" name="passenger-phone" placeholder="Telefoon" value={passengerPhone} onChange={({ target: { value } }) => setPassengerPhone(value)} required />
                          <label onClick={focusPreviousSibling}>Telefoon*</label>
                        </div>
                        <div className="floating-label-field">
                          <input type="text" name="passenger-email" placeholder="E-mail" value={passengerEmail} onChange={({ target: { value } }) => setPassengerEmail(value)} required />
                          <label onClick={focusPreviousSibling}>E-mail*</label>
                        </div>

                        <Button type="submit">
                          {
                            busySubmitting ? (
                              <Spinner />
                            ) : 'Vlucht boeken'
                          }
                        </Button>
                      </form>
                    ) : ''
                  }
                </div>
              </>
            )
          }
        </div>

        <h2>Zet jezelf op de wachtlijst</h2>
        <h3>Als er geen slots meer beschikbaar zijn, kan je jezelf ook aanmelden op onze wachtlijst.</h3>

        {
          !waitlistSubmitted ? (
            <form
              onSubmit={handleSubmitToWaitlist}
              data-netlify="true"
              name="lidmaatschap"
              className={`waitlist ${waitlistSubmitted ? 'submitted' : ''}`}
              method="POST"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="floating-label-field">
                <input type="text" name="name" placeholder="Name" value={name} onChange={({ target: { value } }) => setName(value)} required />
                <label onClick={focusPreviousSibling}>Naam*</label>
              </div>
              <div className="floating-label-field">
                <input type="text" name="email" placeholder="E-mail" value={email} onChange={({ target: { value } }) => setEmail(value)} required />
                <label onClick={focusPreviousSibling}>E-mail*</label>
              </div>
              <div className="floating-label-field">
                <input type="text" name="phone" placeholder="Phone" value={phone} onChange={({ target: { value } }) => setPhone(value)} pattern="[\+0-9\s]+" />
                <label onClick={focusPreviousSibling}>Mobiel</label>
              </div>

              <Select>
                {
                  availableDays.map(({
                    day,
                  }) => (
                    <option>{dayjs(day).format('ddd D MMM')}</option>
                  ))
                }
              </Select>

              <Select>
                {
                  availableDays.map(({
                    day,
                  }) => (
                    <option>{dayjs(day).format('ddd D MMM')}</option>
                  ))
                }
              </Select>

              <Button type="submit">Op de wachtlijst zetten</Button>

              {
                waitlistSubmitFailed ? (
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
