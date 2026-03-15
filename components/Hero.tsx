export default function Hero() {
  return (
    <section id="hero">
      <div className="hero">
        <div className="hero-content">
          <span className="hero-badge">Backend Engineer</span>
          <h1>
            Hi, I&apos;m <span className="accent">Putthakun</span>
          </h1>
          <p className="hero-sub">
            I build scalable, reliable backend systems using{" "}
            <span className="tag-go">Go</span> and{" "}
            <span className="tag-python">Python</span>. Passionate about
            clean architecture, APIs, and performance.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">5+</span>
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
              <span className="code-filename">main.go</span>
            </div>
            <div className="code-body">
              <code>
                <span className="kw">package</span> main{"\n\n"}
                <span className="kw">import</span> <span className="str">&quot;fmt&quot;</span>{"\n\n"}
                <span className="kw">type</span> <span className="code-type">Developer</span> <span className="kw">struct</span> {"{"}{"\n"}
                {"    "}Name   <span className="code-type">string</span>{"\n"}
                {"    "}Role   <span className="code-type">string</span>{"\n"}
                {"    "}Skills []<span className="code-type">string</span>{"\n"}
                {"}"}{"\n\n"}
                <span className="kw">func</span> <span className="fn">main</span>() {"{"}{"\n"}
                {"    "}dev := Developer{"{"}{"\n"}
                {"        "}Name: <span className="str">&quot;Putthakun&quot;</span>,{"\n"}
                {"        "}Role: <span className="str">&quot;Backend Engineer&quot;</span>,{"\n"}
                {"        "}Skills: []<span className="code-type">string</span>{"{"}{"\n"}
                {"            "}<span className="str">&quot;Go&quot;</span>, <span className="str">&quot;Python&quot;</span>,{"\n"}
                {"            "}<span className="str">&quot;PostgreSQL&quot;</span>, <span className="str">&quot;Docker&quot;</span>,{"\n"}
                {"        "},{"}"},{"\n"}
                {"    "}{"}"}{"\n"}
                {"    "}fmt.<span className="fn">Printf</span>(<span className="str">&quot;Hello, %s\n&quot;</span>,{"\n"}
                {"        "}dev.Name){"\n"}
                {"}"}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
