import Button from "./components/Button";
import styles from "./css/main.module.css";
export default function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={styles.cont}>
      <div className={styles.child}>
        {arr.map((val) => {
          return <Button key={val} val={val} />;
        })}
      </div>
    </div>
  );
}
