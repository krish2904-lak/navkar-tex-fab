import "../styles/dealership.css";


export default function Dealership() {
  return (
    <div className="dealership-lux">

      <section className="dealer-hero">
        <h1>Our Elite Dealerships</h1>
        <p>Authorised partners of India’s finest textile houses</p>
      </section>

      <section className="dealer-wall">

        <div className="dealer-tile">
          <img src="/logos/bsl.png" alt="BSL" />
          <h3>BSL Limited</h3>
          <span>Precision • Performance • Prestige</span>
        </div>

        <div className="dealer-tile">
          <img src="/logos/mafatlal.png" alt="Mafatlal" />
          <h3>Mafatlal</h3>
          <span>Heritage • Trust • Excellence</span>
        </div>

        <div className="dealer-tile">
          <img src="/logos/sumanglam.png" alt="Sumanglam" />
          <h3>Sumanglam</h3>
          <span>Modern • Sharp • Refined</span>
        </div>

      </section>

    </div>
  );
}
