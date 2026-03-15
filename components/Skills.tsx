"use client";
import { useEffect, useRef } from "react";

const groups = [
  {
    title: "Languages",
    skills: [
      { icon: "Go", cls: "go-icon", name: "Go (Golang)", w: "90%" },
      { icon: "Py", cls: "py-icon", name: "Python", w: "85%" },
      { icon: "SQL", cls: "sql-icon", name: "SQL", w: "80%" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { icon: "Gin", cls: "gin-icon", name: "Gin / Fiber", w: "88%" },
      { icon: "FA", cls: "fa-icon", name: "FastAPI", w: "85%" },
      { icon: "gRPC", cls: "grpc-icon", name: "gRPC", w: "70%" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: "PG", cls: "pg-icon", name: "PostgreSQL", w: "85%" },
      { icon: "Rd", cls: "redis-icon", name: "Redis", w: "78%" },
      { icon: "Mg", cls: "mongo-icon", name: "MongoDB", w: "72%" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { icon: "Dkr", cls: "docker-icon", name: "Docker / Compose", w: "82%" },
      { icon: "K8s", cls: "k8s-icon", name: "Kubernetes", w: "65%" },
      { icon: "Git", cls: "git-icon", name: "Git / CI/CD", w: "88%" },
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
