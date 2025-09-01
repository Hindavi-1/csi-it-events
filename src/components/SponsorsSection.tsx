"use client";
import "../styles/SponsorsSection.css";

export default function SponsorsSection() {
  const sponsors = [
    {
      name: "TechCorp",
      logo: "/logo.png", // Using available logo as placeholder
      tier: "platinum",
      description: "Leading technology solutions provider",
      website: "https://example.com/techcorp"
    },
    {
      name: "CodeMasters",
      logo: "/logo.png", // Using available logo as placeholder
      tier: "platinum",
      description: "Expert software development company",
      website: "https://example.com/codemasters"
    },
    {
      name: "InnoSoft",
      logo: "/logo.png", // Using available logo as placeholder
      tier: "gold",
      description: "Innovative software solutions",
      website: "https://example.com/innosoft"
    },
    {
      name: "DesignHub",
      logo: "/logo.png", // Using available logo as placeholder
      tier: "gold",
      description: "Creative design studio",
      website: "https://example.com/designhub"
    },
    {
      name: "TechStart",
      logo: "/logo.png", // Using available logo as placeholder
      tier: "silver",
      description: "Startup accelerator and incubator",
      website: "https://example.com/techstart"
    },
    {
      name: "CloudNet",
      logo: "/logo.png", // Using available logo as placeholder
      tier: "silver",
      description: "Cloud infrastructure provider",
      website: "https://example.com/cloudnet"
    },
  ];

  // Group sponsors by tier
  const platinumSponsors = sponsors.filter(s => s.tier === "platinum");
  const goldSponsors = sponsors.filter(s => s.tier === "gold");
  const silverSponsors = sponsors.filter(s => s.tier === "silver");

  return (
    <section id="sponsors" className="sponsors-section">
      <h2 className="sponsors-title">Our Sponsors</h2>
      <p className="sponsors-subtitle">Proud partners of Technovation 2025</p>

      {platinumSponsors.length > 0 && (
        <div className="sponsors-tier">
          <h3 className="tier-title platinum">Platinum Sponsors</h3>
          <div className="sponsors-grid platinum-grid">
            {platinumSponsors.map((sponsor, idx) => (
              <div key={idx} className="sponsor-card platinum-card">
                <div className="sponsor-card-inner">
                  <div className="sponsor-card-front">
                    <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                    <span className="sponsor-name">{sponsor.name}</span>
                  </div>
                  <div className="sponsor-card-back">
                    <h4>{sponsor.name}</h4>
                    <p className="sponsor-description">{sponsor.description}</p>
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-link">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {goldSponsors.length > 0 && (
        <div className="sponsors-tier">
          <h3 className="tier-title gold">Gold Sponsors</h3>
          <div className="sponsors-grid gold-grid">
            {goldSponsors.map((sponsor, idx) => (
              <div key={idx} className="sponsor-card gold-card">
                <div className="sponsor-card-inner">
                  <div className="sponsor-card-front">
                    <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                    <span className="sponsor-name">{sponsor.name}</span>
                  </div>
                  <div className="sponsor-card-back">
                    <h4>{sponsor.name}</h4>
                    <p className="sponsor-description">{sponsor.description}</p>
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-link">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {silverSponsors.length > 0 && (
        <div className="sponsors-tier">
          <h3 className="tier-title silver">Silver Sponsors</h3>
          <div className="sponsors-grid silver-grid">
            {silverSponsors.map((sponsor, idx) => (
              <div key={idx} className="sponsor-card silver-card">
                <div className="sponsor-card-inner">
                  <div className="sponsor-card-front">
                    <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                    <span className="sponsor-name">{sponsor.name}</span>
                  </div>
                  <div className="sponsor-card-back">
                    <h4>{sponsor.name}</h4>
                    <p className="sponsor-description">{sponsor.description}</p>
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-link">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
