import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import useViewport from 'hooks/useViewport';
import './book-a-flight.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';
import Page from 'components/UI/Page';
import Footer from 'components/footer/Footer';

export default function PricesPage() {
  const { isMobile } = useViewport();
  const [slots, setSlots] = useState({});

  useEffect(() => {
    fetch('https://dev.ezac.nl/api/v2/passagiers/slots', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'ezac.nl',
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      console.error('Could not fetch available slots');
      return {};
    }).then((result) => {
      setSlots(result);
    }).catch((error) => console.error(error));
  }, []);

  const availableSlots = useMemo(() => {
    // Filter out all days with no more available slots
    const availableSlotsUnformatted = Object.entries(slots).filter(([day, slotsForDay]) => Object.values(slotsForDay).some((slotForDay) => slotForDay === ''));

    return availableSlotsUnformatted.map(([day, slotsForDay]) => ({
      day,
      slots: Object.entries(slotsForDay).map(([hour, occupant]) => ({
        hour,
        occupied: occupant !== '',
      })),
    }));
  }, [slots]);

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
        <h3>Reserveer een meevlucht voor jezelf of een vriend</h3>

        <div className="flight-booking-widget">
          {
            availableSlots.map(({
              day,
              slot
            }) => (
              <h4>Day: {day}</h4>
            ))
          }
        </div>
      </Page>
      <Footer />
    </div>
  );
}
