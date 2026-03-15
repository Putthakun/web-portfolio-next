export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-label">About Me</div>
        <div className="about-grid">
          <div className="about-text">
            <h2>
              A backend developer passionate about{" "}
              <span className="accent">automation</span> and{" "}
              <span className="accent">AI integration</span>
            </h2>
            <p>
              I&apos;m a Computer Science graduate experienced in building real-world
              systems with FastAPI, Docker, and RabbitMQ, with a focus on
              performance and scalability. I enjoy integrating AI technologies
              like OpenAI API and image generation models to automate workflows.
            </p>
            <p>
              I&apos;m interested in cloud infrastructure and DevOps practices,
              having deployed production systems on AWS EC2 with Docker and
              Nginx. Currently exploring the path toward cloud engineering.
            </p>
            <div className="about-links">
              <a href="https://github.com/Putthakun" target="_blank" rel="noopener noreferrer" className="link-chip">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="link-chip">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a href="#" className="link-chip" download>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          <div>
            <div className="about-info-card">
              <div className="info-row">
                <span className="info-label">Location</span>
                <span className="info-val">Bangkok, Thailand</span>
              </div>
              <div className="info-row">
                <span className="info-label">Available</span>
                <span className="info-val available">
                  <span className="dot-pulse" /> Open to Work
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Focus</span>
                <span className="info-val">Backend / Cloud</span>
              </div>
              <div className="info-row">
                <span className="info-label">Education</span>
                <span className="info-val">B.Cs Computer Science, KMUTNB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
