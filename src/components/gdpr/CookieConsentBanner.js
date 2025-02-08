import React, { useEffect, useState } from 'react';
import Button from 'components/button/Button';
import Toggle from 'components/checkbox/Toggle';
import useCookie from 'hooks/useCookie';
import stroopWafelImg from 'src/img/stroopwafel-solid.svg';
import CloseButton from 'components/button/CloseButton';
import './CookieConsentBanner.scss';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showGranularControls, setShowGranularControls] = useState(false);
  const [selectedCookies, setSelectedCookies] = useState({
    youtube: false,
    tracking: false,
    analytics: false,
  });
  const { setCookie, getCookie } = useCookie('cookie-consent');

  useEffect(() => {
    const consentAlreadyDefined = !getCookie();
    setShowBanner(consentAlreadyDefined);

    if (getCookie()) {
      const cookies = getCookie();
      const cookieMap = {
        ...selectedCookies,
      };

      cookies.split(',').forEach((cookie) => {
        cookieMap[cookie] = true;
      });

      setSelectedCookies(cookieMap);
    }
  }, []);

  const handleStrict = () => {
    setShowBanner(false);
    setCookie('strict');
  };

  const handleAccept = () => {
    setShowBanner(false);
    setCookie('youtube,tracking,analytics');
  };

  const toggleGranularControl = () => {
    setShowGranularControls(true);
  };

  const handleGranularChange = (cookie) => {
    const previousState = selectedCookies[cookie];
    const cookieMap = {
      ...selectedCookies,
    };

    delete cookieMap.strict;

    cookieMap[cookie] = !previousState;

    setSelectedCookies(cookieMap);

    const cookies = Object.entries(cookieMap).filter(([, value]) => value === true).map(([key]) => key).join(',');
    setCookie(cookies);
  };

  if (!showBanner) {
    return (
      <div onClick={() => setShowBanner(true)} className="cookie-consent-button">
        <img src={stroopWafelImg} alt="cookie consent" />
      </div>
    );
  }

  return (
    <div className="cookie-consent-banner">
      <CloseButton onClick={() => setShowBanner(false)} />
      <h1>We gebruiken cookies</h1>
      <p>
        Deze website gebruikt cookies om jouw ervaring te verbeteren. Bekijk onze
        <a href="https://www.ezac.nl/ezac/system/files/Privacyverklaring_EZAC.pdf"> privacyverklaring</a>
        .
      </p>
      {
        showGranularControls ? (
          <div className="granular-controls">
            <div className="cookie-option">
              <span>
                Noodzakelijke cookies
              </span>

              <Toggle value={true} className="blue" disabled />
            </div>
            <div className="cookie-option">
              <span>
                YouTube
              </span>

              <Toggle value={selectedCookies.youtube} handleChange={() => handleGranularChange('youtube')} className="blue" />
            </div>
            <div className="cookie-option">
              <span>
                Tracking
              </span>

              <Toggle value={selectedCookies.tracking} handleChange={() => handleGranularChange('tracking')} className="blue" />
            </div>
            <div className="cookie-option">
              <span>
                Analytics
              </span>

              <Toggle value={selectedCookies.analytics} handleChange={() => handleGranularChange('analytics')} className="blue" />
            </div>
          </div>
        ) : (
          <Button onClick={toggleGranularControl} className="white">Aanpassen</Button>
        )
      }
      <Button onClick={handleStrict} className="white">Strikt noodzakelijk</Button>
      {
        showGranularControls && (
          <Button onClick={() => setShowBanner(false)} className="white">Opslaan</Button>
        )
      }
      <Button onClick={handleAccept} className="white">Accepteer alles</Button>
    </div>
  );
}
