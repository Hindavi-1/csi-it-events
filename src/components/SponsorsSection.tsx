"use client";
import "../styles/SponsorsSection.css";

export default function SponsorsSection() {
  const sponsors = [
    { name: "TechCorp", logo: "/sponsors/techcorp.png" },
    { name: "CodeMasters", logo: "/sponsors/codemasters.png" },
    { name: "InnoSoft", logo: "/sponsors/innosoft.png" },
    { name: "DesignHub", logo: "/sponsors/designhub.png" },
  ];

  return (
    <section id="sponsors" className="sponsors-section">
      <h2 className="sponsors-title">Our Sponsors</h2>
      <p className="sponsors-subtitle">Proud partners of Technovation 2025</p>

      <div className="sponsors-grid">
        {sponsors.map((s, idx) => (
          <div key={idx} className="sponsor-card">
            <img src={s.logo} alt={s.name} className="sponsor-logo" />
            <span className="sponsor-name">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
