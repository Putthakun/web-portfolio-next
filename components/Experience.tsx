const jobs = [
  {
    title: "Backend Engineer",
    company: "Company Name",
    period: "2023 — Present",
    desc: "Led development of core API services handling millions of requests per day. Migrated legacy monolith to microservices architecture using Go and gRPC.",
    tags: ["Go", "gRPC", "PostgreSQL", "K8s"],
    goTags: ["Go"],
  },
  {
    title: "Junior Backend Developer",
    company: "Another Company",
    period: "2021 — 2023",
    desc: "Built and maintained REST APIs using Python and FastAPI. Worked on data pipeline services integrating with third-party APIs.",
    tags: ["Python", "FastAPI", "MongoDB", "Docker"],
    pythonTags: ["Python"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-label">Experience</div>
        <h2 className="section-title">Work History</h2>
        <div className="timeline">
          {jobs.map((job) => (
            <div className="timeline-item" key={job.title}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{job.title}</h3>
                    <span className="timeline-company">{job.company}</span>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <p className="timeline-desc">{job.desc}</p>
                <div className="timeline-tags">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className={`tag${job.goTags?.includes(t) ? " go" : ""}${job.pythonTags?.includes(t) ? " python" : ""}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
