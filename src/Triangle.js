import { useParams, Link } from "react-router-dom";
export default function Triangle(props) {
  let { num } = useParams();
  return (
    <div>
      <h3>Num of rows: {num}</h3>
    </div>
  );
}
