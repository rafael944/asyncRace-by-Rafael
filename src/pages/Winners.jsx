import { Link, useNavigate } from "react-router-dom";

export default function Winners() {
  const navigate = useNavigate();
  return (
    <div>
      <span>Winners</span>
      <Link to={navigate(-1)}>Back</Link>
    </div>
  );
}
