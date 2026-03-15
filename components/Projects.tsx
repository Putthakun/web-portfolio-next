const IconGithub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconExternal = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
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
                <a href="#" title="GitHub"><IconGithub /></a>
                <a href="#" title="Live Demo"><IconExternal /></a>
              </div>
            </div>
            <h3 className="project-title">Real-Time Order Processing API</h3>
            <p className="project-desc">
              High-throughput REST API built with Go and Gin for processing
              e-commerce orders. Handles 10,000+ requests/min with Redis
              caching and PostgreSQL persistence.
            </p>
            <ul className="project-highlights">
              <li>Reduced latency by 60% using connection pooling</li>
              <li>Implemented JWT auth with refresh token rotation</li>
              <li>Deployed on Kubernetes with horizontal pod autoscaling</li>
            </ul>
            <div className="project-tags">
              {["Go", "Gin", "PostgreSQL", "Redis", "Docker", "K8s"].map((t) => (
                <span key={t} className={`tag${t === "Go" ? " go" : ""}`}>{t}</span>
              ))}
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-links">
                <a href="#" title="GitHub"><IconGithub /></a>
                <a href="#" title="Live Demo"><IconExternal /></a>
              </div>
            </div>
            <h3 className="project-title">ML Model Serving Platform</h3>
            <p className="project-desc">
              FastAPI-based microservice for serving machine learning models
              via REST endpoints. Supports async batch inference with
              background task queuing.
            </p>
            <div className="project-tags">
              {["Python", "FastAPI", "Celery", "RabbitMQ", "Docker"].map((t) => (
                <span key={t} className={`tag${t === "Python" ? " python" : ""}`}>{t}</span>
              ))}
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-links">
                <a href="#" title="GitHub"><IconGithub /></a>
              </div>
            </div>
            <h3 className="project-title">Distributed Task Scheduler</h3>
            <p className="project-desc">
              A lightweight distributed task scheduler written in Go with
              leader election using etcd. Supports cron-like expressions and
              task persistence.
            </p>
            <div className="project-tags">
              {["Go", "gRPC", "etcd", "PostgreSQL"].map((t) => (
                <span key={t} className={`tag${t === "Go" ? " go" : ""}`}>{t}</span>
              ))}
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-links">
                <a href="#" title="GitHub"><IconGithub /></a>
                <a href="#" title="Live Demo"><IconExternal /></a>
              </div>
            </div>
            <h3 className="project-title">Auth Service (OAuth 2.0 + OIDC)</h3>
            <p className="project-desc">
              Standalone authentication service implementing OAuth 2.0 and
              OpenID Connect with Python/FastAPI. Supports social login and MFA.
            </p>
            <div className="project-tags">
              {["Python", "FastAPI", "PostgreSQL", "Redis"].map((t) => (
                <span key={t} className={`tag${t === "Python" ? " python" : ""}`}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
