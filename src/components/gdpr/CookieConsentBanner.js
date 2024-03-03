import React, { useState } from 'react';
import Button from 'components/button/Button';
import './CookieConsentBanner.scss';
import useCookie from 'hooks/useCookie';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(true);
  const [showGranularControls, setShowGranularControls] = useState(true);
  const {} = useCookie('cookie-consent');

  const handleStrict = () => {
    setShowBanner(false);
  };

  const handleAccept = () => {
    setShowBanner(false);
  };

  const toggleGranularControl = () => {
    setShowGranularControls(true);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <h1>We gebruiken cookies</h1>
      <p>Deze website gebruikt cookies om jouw ervaring te verbeteren</p>
      <Button onClick={handleStrict} className="white">Strict noodzakelijk</Button>
      <Button onClick={toggleGranularControl} className="white">Aanpassen</Button>
      <Button onClick={handleAccept} className="white">Accepteer alles</Button>
    </div>
  );
}
