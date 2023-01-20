import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/header/Header';
import './prices.scss';
import 'src/styles/reset.scss';
import 'src/styles/general.scss';
import Page from 'components/UI/Page';
import Button from 'components/button/Button';

export default function PricesPage() {
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
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap" rel="stylesheet" />
        <title>EZAC | Tarieven</title>
      </Helmet>

      <Page className="offset-from-top">
        <h2>Tarieven</h2>
        <h3>Word vliegend lid!</h3>

        <div className="all-prices">
          <div className="price-box blue">
            <h3 className="price-name">Vliegend lid</h3>
            <span className="price">€810</span>
            <div className="feature-list">
              <div className="feature">
                <i className="material-symbols-outlined">check_circle</i>
                <p>All-in tarief</p>
              </div>
              <div className="feature">
                <i className="material-symbols-outlined">check_circle</i>
                <p>Geen minutengeld</p>
              </div>
              <div className="feature">
                <i className="material-symbols-outlined">check_circle</i>
                <p>Geen kosten per lierstart</p>
              </div>
              <div className="feature">
                <i className="material-symbols-outlined">check_circle</i>
                <p>Gratis instructie</p>
              </div>

              <Button>Lid worden</Button>
            </div>
          </div>
          <div className="price-box">
            <h3 className="price-name">Tienrittenkaart</h3>
            <span className="price">€355</span>
            <div className="feature-list">
              <div className="feature">
                <i className="material-symbols-outlined">check_circle</i>
                <p>10 instructie vluchten</p>
              </div>
              <div className="feature">
                <i className="material-symbols-outlined">check_circle</i>
                <p>Bepaal of de sport iets voor jou is</p>
              </div>
              <div className="feature">
                <i className="material-symbols-outlined">check_circle</i>
                <p>Keuze om daarna bij te betalen en lidmaatschap te vervolledigen</p>
              </div>

              <Button>Lees meer</Button>
            </div>
          </div>
        </div>

        <h3>Bijkomende kosten</h3>
        <p>
          Naast uw lidmaatschap bij de EZAC zijn er nog een aantal verplichte kosten buiten de club waarvan u op de hoogte moet zijn.
          Namelijk: De medische keuring en het lidmaatschap bij de KNVvL. Dit brengen we samen met jou in orde wanneer je je aanmeldt als vliegend lid.
          Voor de opleiding zelf hoef je je niet meteen medisch te keuren, maar het is beter dat je dit wel al doet.
          Zo weet je ook of je in orde bent om solo te mogen vliegen. Vanaf je solo gaat vliegen en voor je brevet is de medische keuring namelijk vereist. 
        </p>

        <div className="additional-costs-grid">
          <table>
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
          </table>
        </div>

        <h3>Is zweefvliegen duur?</h3>
        <p>
          Het antwoord op de vraag is relatief. Vliegen blijft natuurlijk een zeer indrukwekkende sport met of zonder motor.
          Om je een idee te geven: De vliegopleiding met een motor-vliegtuig is vaak €140-200 per uur met een instructeur. De meesten ronden de opleiding af
          als de teller rond de €10.000 a €12.000 staat. Daarmee kan je minstens 10 jaar naar hartelust op de clubvloot vliegen bij ons!
          Tevens heb je bij ons, als je dit ambieert, sneller je theorie en praktijk-examen achter de rug. Bij motorvliegen vlieg je vaak in langere, rechte stukken.
          Velen stoppen er dan ook mee omdat er na een tijdje minder uitdaging aan is.
        </p>

        <p>
          Het zweefvliegen daarentegen verveelt helemaal niet, elke vlucht is een strijd om boven te blijven, een dans met de krachten van de natuur.
          Je kan je grenzen blijven verleggen en deelnemen aan competities (hiervoor mag men ook de clubvloot benutten).
        </p>

        <h3>De tienrittenkaart</h3>
        <p>
          De contributie voor een volledig jaar is natuurlijk wel heel wat als je nog niet zeker weet of deze sport iets voor je is. Dat weten wij ook, en daarom is er een tienrittenkaart.
          Meeste van onze startende leden kiezen hier voor. Dit zorgt er voor dat je voor 10
          instructie-starts kunt zien of de sport iets voor je is. Daarna kan je voor jezelf bepalen
          of je je lidmaatschap wilt vervolledigen. Je betaalt dan gewoon het resterende bedrag bij
          zodat je dan volwaardig lid wordt.
        </p>
      </Page>
    </div>
  );
}
