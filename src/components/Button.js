import { Link } from "react-router-dom";
import styles from "../css/button.module.css";

export default function App({ val }) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <Link to={`/triangle/${val}`}>
        <button className={styles.button}>{val}</button>
      </Link>
    </div>
  );
}
