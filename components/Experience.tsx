const jobs = [
  {
    title: "Backend Developer (Project-based)",
    company: "Sony Device Technology (Thailand)",
    period: "Sep 2024 — Apr 2025",
    desc: "Developed a Real-Time Face Recognition System collaborating directly with Sony's engineering team. Containerized the system with Docker, deployed behind Nginx as a load balancer, and hosted on AWS EC2 for production use. Presented updates and incorporated feedback to improve system performance.",
    tags: ["Python", "FastAPI", "Redis", "RabbitMQ", "Docker", "Nginx", "AWS EC2"],
    pythonTags: ["Python"],
  },
  {
    title: "Programmer Intern",
    company: "Deverhood HT Company Limited",
    period: "Apr 2024 — Jun 2024",
    desc: "Developed SQL queries for data analysis and dashboards using Apache Superset. Redesigned and optimized an existing web application for desktop and mobile using Figma and Ant Design, improving responsiveness by implementing mobile-first responsive design.",
    tags: ["SQL", "Apache Superset", "React.js", "Ant Design", "Figma"],
    pythonTags: [],
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
                      className={`tag${job.pythonTags?.includes(t) ? " python" : ""}`}
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
