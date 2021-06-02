import { Link } from "react-router-dom";

export default function App({ val }) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <Link to={`/triangle/${val}`}>
        <button style={{ minWidth: "100px", minHeight: "100px" }}>{val}</button>
      </Link>
    </div>
  );
}
