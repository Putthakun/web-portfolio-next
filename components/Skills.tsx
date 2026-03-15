"use client";
import { useEffect, useRef } from "react";

const groups = [
  {
    title: "Languages",
    skills: [
      { icon: "Py", cls: "py-icon", name: "Python", w: "85%" },
      { icon: "JS", cls: "go-icon", name: "JavaScript (ES6+)", w: "75%" },
      { icon: "SQL", cls: "sql-icon", name: "SQL", w: "80%" },
      { icon: "C++", cls: "grpc-icon", name: "C / C++", w: "60%" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { icon: "FA", cls: "fa-icon", name: "FastAPI", w: "85%" },
      { icon: "Dj", cls: "gin-icon", name: "Django", w: "75%" },
      { icon: "Nd", cls: "mongo-icon", name: "Node.js", w: "65%" },
      { icon: "Re", cls: "redis-icon", name: "React.js", w: "65%" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: "PG", cls: "pg-icon", name: "PostgreSQL", w: "80%" },
      { icon: "My", cls: "sql-icon", name: "MySQL", w: "78%" },
      { icon: "Rd", cls: "redis-icon", name: "Redis", w: "75%" },
      { icon: "SS", cls: "mongo-icon", name: "SQL Server", w: "65%" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { icon: "Dkr", cls: "docker-icon", name: "Docker / Nginx", w: "82%" },
      { icon: "AWS", cls: "k8s-icon", name: "AWS (EC2)", w: "65%" },
      { icon: "Git", cls: "git-icon", name: "Git", w: "85%" },
      { icon: "MQ", cls: "go-icon", name: "RabbitMQ", w: "70%" },
      { icon: "Prom", cls: "grpc-icon", name: "Prometheus / Grafana", w: "60%" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { icon: "OAI", cls: "fa-icon", name: "OpenAI API", w: "80%" },
      { icon: "n8n", cls: "py-icon", name: "n8n / Make.com", w: "75%" },
      { icon: "PT", cls: "gin-icon", name: "PyTorch / scikit-learn", w: "60%" },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".skill-fill")
              .forEach((el) => el.classList.add("animated"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-grid">
          {groups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3 className="skill-group-title">{g.title}</h3>
              <div className="skill-list">
                {g.skills.map((s) => (
                  <div className="skill-item" key={s.name}>
                    <div className={`skill-icon ${s.cls}`}>{s.icon}</div>
                    <div className="skill-info">
                      <span className="skill-name">{s.name}</span>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{ "--w": s.w } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
