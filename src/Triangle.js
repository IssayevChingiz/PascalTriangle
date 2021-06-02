import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
export default function Triangle() {
  let { num } = useParams();
  const [arr1, setArr1] = useState([]);

  useEffect(() => {
    if (num === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= num; row++) {
      let arr = [];
      for (let col = 0; col < row; col++) {
        if (col === 0 || col === row - 1) {
          arr.push(1);
        } else {
          arr.push(result[row - 2][col - 1] + result[row - 2][col]);
        }
      }

      result.push(arr);
    }
    setArr1(result);
  }, [num]);

  return (
    <div>
      <Link to={`/`}>
        <button>close</button>
      </Link>

      {arr1 ? (
        arr1.map((items, index) => {
          return (
            <div key={index}>
              {items.map((subItems, sIndex) => {
                return <div key={sIndex}> {subItems} </div>;
              })}
              ----------------------
            </div>
          );
        })
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}
