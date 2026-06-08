import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-final ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* LEFT NAV */}
        <nav className="nav-side">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* CENTER BRAND */}
        <Link to="/" className="nav-brand">
          <img src="logos/logo.png" alt="Navkar Tex Fab" />
          <span>NAVKAR TEX FAB</span>
        </Link>

        {/* RIGHT NAV */}
        <nav className="nav-side right">
          <Link to="/catalog">Catalog</Link>
          <Link to="/dealerships">Dealerships</Link>
          <Link to="/contact" className="nav-btn">Enquire</Link>
        </nav>

      </div>
    </header>
  );
}
