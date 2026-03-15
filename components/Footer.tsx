export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          Designed &amp; Built by <span className="accent">Putthakun</span>
          &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
