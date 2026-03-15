export default function Hero() {
  return (
    <section id="hero">
      <div className="hero">
        <div className="hero-content">
          <span className="hero-badge">Backend Developer</span>
          <h1>
            Hi, I&apos;m <span className="accent">Putthakun</span>
          </h1>
          <p className="hero-sub">
            I build real-world backend systems using{" "}
            <span className="tag-python">Python</span> and{" "}
            <span className="tag-go">FastAPI</span>. Passionate about
            automation, AI integration, and cloud deployment.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">2</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="code-filename">main.py</span>
            </div>
            <div className="code-body">
              <code>
                <span className="kw">from</span> fastapi <span className="kw">import</span> FastAPI{"\n"}
                <span className="kw">from</span> pydantic <span className="kw">import</span> BaseModel{"\n\n"}
                app = <span className="fn">FastAPI</span>(){"\n\n"}
                <span className="kw">class</span> <span className="code-type">Developer</span>(BaseModel):{"\n"}
                {"    "}name: <span className="code-type">str</span>{"\n"}
                {"    "}role: <span className="code-type">str</span>{"\n"}
                {"    "}skills: <span className="code-type">list</span>[<span className="code-type">str</span>]{"\n\n"}
                @app.<span className="fn">get</span>(<span className="str">&quot;/me&quot;</span>){"\n"}
                <span className="kw">def</span> <span className="fn">about_me</span>():{"\n"}
                {"    "}<span className="kw">return</span> Developer({"\n"}
                {"        "}name=<span className="str">&quot;Putthakun&quot;</span>,{"\n"}
                {"        "}role=<span className="str">&quot;Backend Developer&quot;</span>,{"\n"}
                {"        "}skills=[<span className="str">&quot;FastAPI&quot;</span>, <span className="str">&quot;Docker&quot;</span>,{"\n"}
                {"                "}<span className="str">&quot;AWS&quot;</span>, <span className="str">&quot;Redis&quot;</span>]{"\n"}
                {"    "})
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
