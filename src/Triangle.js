import { useParams, Link } from "react-router-dom";
export default function Triangle(props) {
  let { num } = useParams();
  let arr = [[1], [23, 34], [45, 67, 78]];
  return (
    <div>
      <h3>Num of rows: {num}</h3>

      {arr.map((items, index) => {
        return (
          <div>
            {items.map((subItems, sIndex) => {
              return <div> {subItems} </div>;
            })}
            ----------------------
          </div>
        );
      })}
    </div>
  );
}
