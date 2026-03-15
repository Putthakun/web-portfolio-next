const IconGithub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);


export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-label">Projects</div>
        <h2 className="section-title">What I&apos;ve Built</h2>
        <div className="projects-grid">

          {/* Featured */}
          <div className="project-card featured">
            <div className="project-header">
              <span className="project-badge">Featured</span>
              <div className="project-links">
                <a href="https://github.com/Putthakun/webserver-recognition-SY" target="_blank" rel="noopener noreferrer" title="GitHub"><IconGithub /></a>
              </div>
            </div>
            <h3 className="project-title">Real-Time Face Recognition System</h3>
            <p className="project-desc">
              Production face recognition system built with FastAPI, Redis, and
              RabbitMQ for Sony Device Technology (Thailand). Deployed on AWS EC2
              with Docker and Nginx as a load balancer for high availability.
            </p>
            <ul className="project-highlights">
              <li>Containerized with Docker for consistent environments</li>
              <li>Nginx load balancer for scalability and reliability</li>
              <li>Deployed on AWS EC2 for production access</li>
            </ul>
            <div className="project-tags">
              {["Python", "FastAPI", "Redis", "RabbitMQ", "Docker", "Nginx", "AWS EC2"].map((t) => (
                <span key={t} className={`tag${t === "Python" ? " python" : ""}`}>{t}</span>
              ))}
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-links">
                <a href="https://github.com/Putthakun" target="_blank" rel="noopener noreferrer" title="GitHub"><IconGithub /></a>
              </div>
            </div>
            <h3 className="project-title">AI Content Automation System</h3>
            <p className="project-desc">
              Automation system integrating Make.com and OpenAI API to
              auto-generate SEO-optimized articles and images for marketing,
              achieving 90% reduction in content creation time.
            </p>
            <div className="project-tags">
              {["Python", "OpenAI API", "Make.com", "WordPress", "Facebook API"].map((t) => (
                <span key={t} className={`tag${t === "Python" ? " python" : ""}`}>{t}</span>
              ))}
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-links">
                <a href="https://github.com/Putthakun?tab=repositories" target="_blank" rel="noopener noreferrer" title="GitHub"><IconGithub /></a>
              </div>
            </div>
            <h3 className="project-title">Online Exam System</h3>
            <p className="project-desc">
              Full-stack exam platform built with React and Django. Enables
              teachers to create tests and students to view results, with
              RESTful APIs and MySQL for secure exam access and score calculation.
            </p>
            <div className="project-tags">
              {["Python", "Django", "React.js", "MySQL", "REST API"].map((t) => (
                <span key={t} className={`tag${t === "Python" ? " python" : ""}`}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
