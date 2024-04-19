import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="links">
        <Link className="gar" to="/">
          GARAGE
        </Link>
        <Link className="win" to="winners">
          WINNERS
        </Link>
      </div>
      <div className="async">
        <span>ASYNC</span>
        <p>RACE</p>
      </div>
    </header>
  );
}
