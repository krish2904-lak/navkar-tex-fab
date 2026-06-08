import "../styles/about.css";
export default function About() {
  return (
    <div className="about-luxury">

      {/* CINEMATIC HERO */}
      <section className="about-cinema">
        <div className="cinema-overlay">
          <h1>WE DON’T SELL FABRIC</h1>
          <h2>WE DEFINE TEXTILE EXCELLENCE</h2>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="story-left">
          <span className="lux-tag">OUR STORY</span>
          <h3>
            A legacy built on quality, precision<br />
            and uncompromised standards.
          </h3>
          <p>
            Navkar Tex Fab stands at the intersection of tradition and innovation.
            We are authorised dealers of India’s most respected textile brands,
            delivering premium suitings and shirtings to those who value class.
          </p>
          <p>
            From corporate uniforms to luxury tailoring fabrics, every metre we
            deliver carries trust, consistency and craftsmanship.
          </p>
        </div>

        <div className="story-right">
          <img
            src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1"
            alt="Luxury Textile"
          />
        </div>
      </section>

      {/* POWER STRIP */}
      <section className="about-power">
        <div>
          <h4>25+</h4>
          <span>Years of Legacy</span>
        </div>
        <div>
          <h4>1000+</h4>
          <span>Clients Served</span>
        </div>
        <div>
          <h4>3</h4>
          <span>Elite Brands</span>
        </div>
      </section>

    </div>
  );
}