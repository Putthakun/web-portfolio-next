"use client";
import { useEffect, useState } from "react";

const links = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 64;
    window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={(e) => handleNav(e, "hero")}>
          &lt;Putthakun /&gt;
        </a>
        <ul className="nav-links">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleNav(e, id)}
                className={id === "contact" ? "btn-nav" : ""}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map((id) => (
          <a key={id} href={`#${id}`} onClick={(e) => handleNav(e, id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
