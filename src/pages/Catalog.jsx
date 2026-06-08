import { useState } from "react";
import "../styles/catalog.css";

const catalogs = [
  {
    name: "Master Card",
    brand: "Sumanglam",
    file: "mastercard.pdf",
    logo: "/logos/sumanglam.png"
  },
  {
    name: "Sterling",
    brand: "BSL",
    file: "sterling.pdf",
    logo: "/logos/bsl.png"
  },
  {
    name: "Picasso",
    brand: "BSL",
    file: "picasso.pdf",
    logo: "/logos/bsl.png"
  },
  {
    name: "Mafatlal",
    brand: "Mafatlal",
    file: "mafatlal.pdf",
    logo: "/logos/mafatlal.png"
  }
];

export default function Catalog() {
  const [activePdf, setActivePdf] = useState(null);

  return (
    <div className="catalog-page">
      {/* HEADER */}
      <section className="catalog-hero">
        <h1>Fabric Catalogs</h1>
        <p>Premium Suitings & Shirtings Collections</p>
      </section>

      {/* GRID */}
      <section className="catalog-grid">
        {catalogs.map((c, i) => (
          <div
            key={c.file}
            className="catalog-card"
            style={{ animationDelay: `${i * 0.1}s` }}
            onClick={() => setActivePdf(c.file)}
          >
            <img src={c.logo} alt={c.brand} className="brand-logo" />

            <h3>{c.name}</h3>
            <span>{c.brand} Collection</span>

            <div className="view-btn">View Catalog</div>
          </div>
        ))}
      </section>

      {/* PDF MODAL */}
      {activePdf && (
        <div className="pdf-overlay">
          <button
            className="close-btn"
            onClick={() => setActivePdf(null)}
          >
            ✕
          </button>

          <iframe
            src={`/catalogs/${activePdf}`}
            title="PDF Viewer"
          />
        </div>
      )}
    </div>
  );
}
