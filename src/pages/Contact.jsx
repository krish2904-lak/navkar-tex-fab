import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-lux">

      {/* HERO */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Let’s discuss fabrics, samples & business enquiries</p>
      </section>

      {/* MAIN SECTION */}
      <section className="contact-main">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Navkar Tex Fab</h2>

          <p>
            Premium suiting, shirting & uniform fabric solutions.
            Trusted dealership of BSL, Mafatlal & Sumanglam.
          </p>

          <div className="info-block">
            <span>📍 Address</span>
            <p>A-23 BTM Market Bhilwara</p>
            <p>Bhilwara, Rajasthan, India</p>
          </div>

          <div className="info-block">
            <span>📞 Phone</span>
            <p>+91 9352102136</p>
          </div>

          <div className="info-block">
            <span>✉ Email</span>
            <p>info@navkartexfab.com</p>
          </div>

          <a
            href="https://wa.me/919352102136"
            target="_blank"
            className="whatsapp-btn"
          >
            Enquire on WhatsApp
          </a>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h3>Send an Enquiry</h3>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Mobile Number" required />
            <textarea placeholder="Your Requirement"></textarea>

            <button type="submit">Submit Enquiry</button>
          </form>
        </div>

      </section>

      {/* MAP */}
      <section className="contact-map">
        <iframe
          title="Navkar Tex Fab Location"
          src="https://www.google.com/maps?q=Bhilwara%20Rajasthan&output=embed"
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}
