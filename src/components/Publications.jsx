function Publications() {
  const publications = [
    {
      title: "Two Years After Afghanistan\u2019s Fall: What Was Life Like Under The Taliban Rule? (3rd Ed.)",
      description:
        "A research publication documenting the realities of life under Taliban rule in Afghanistan, based on firsthand accounts and analysis. Published by Afghans for Progressive Thinking (APT).",
      link: "https://aptyouth.org/two-years-after-afghanistans-fall-what-was-life-like-under-the-taliban-rule-3rd-ed/"
    }
  ];

  return (
    <section id="publications" className="publications">
      <div className="section-heading">
        <h2>Publications</h2>
        <p>Research and publications.</p>
      </div>

      <div className="publications-grid">
        {publications.map((pub, index) => (
          <article key={index} className="publication-card">
            <span className="publication-label">Publication</span>
            <h3>{pub.title}</h3>
            <p>{pub.description}</p>
            <a href={pub.link} className="publication-link" target="_blank" rel="noopener noreferrer">
              Read more →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Publications;
