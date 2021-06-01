import { Link } from "react-router-dom";

export default function App({ val }) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Link to={`/triangle/${val}`}>
      <div
        style={{
          border: "solid black",
          minWidth: "50px",
          minHeight: "50px",
          textAlign: "center"
        }}
      >
        {val}
      </div>
    </Link>
  );
}
