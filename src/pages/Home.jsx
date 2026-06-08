import "../styles/home.css";




export default function Home() {
  return (
    <div className="home-final">

      {/* HERO */}
      <section className="hero-final">
        <div className="hero-overlay" />

        <div className="hero-inner">

          {/* LEFT CONTENT */}
          <div className="hero-text">
            <span className="hero-tag">
              AUTHORIZED TEXTILE DEALERS
            </span>

            <h1>
              Premium Suiting & <br />
              Uniform Fabrics
            </h1>

            <p>
              Navkar Tex Fab is a trusted textile house delivering
              high-grade fabrics sourced from India’s leading mills.
              Authorized dealers of <strong>BSL, Mafatlal & Sumanglam</strong>.
            </p>

            <div className="hero-buttons">
              <a href="/catalog" className="btn-solid">
                View Fabric Catalog
              </a>
              <a href="/contact" className="btn-ghost">
                Business Enquiry
              </a>
            </div>
          </div>

          {/* RIGHT FABRIC */}
          <div className="hero-fabric-box">
            <img
              src="/images/img1.jpg"
              alt="Suiting Fabric Rolls"
            />
          </div>

        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="category-strip">
        <div>Suitings</div>
        <div>Shirtings</div>
        <div>Uniform Fabrics</div>
        <div>Corporate Wear</div>
      </section>

    </div>
  );
}
