import "./styles.css";
import Button from "./components/Button";
export default function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridColumnGap: "60px",
        gridRowGap: "60px"
      }}
    >
      {arr.map((val) => {
        return <Button val={val} />;
      })}
    </div>
  );
}
