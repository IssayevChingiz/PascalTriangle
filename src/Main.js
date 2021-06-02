import "./styles.css";
import Button from "./components/Button";
export default function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "0.5fr 0.5fr 0.5fr",
        gridColumnGap: "10px",
        gridRowGap: "50px"
      }}
    >
      {arr.map((val) => {
        return <Button key={val} val={val} />;
      })}
    </div>
  );
}
