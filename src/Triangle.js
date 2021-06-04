import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Row from "./components/Row";
import styles from "./css/triangle.module.css";
export default function Triangle() {
  let { num } = useParams();
  const [arr1, setArr1] = useState([]);
  const [xyVal, SetXYVal] = useState([0, 0]);

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
    <div className={styles.mainCont}>
      <div className={styles.childCont}>
        <div style={{ minWidth: "200px" }}>
          <Link to={`/`}>
            <button>close</button>
          </Link>
          <br />
          <br />
          Current XY: {xyVal[0]} {xyVal[1]}
        </div>

        <div>
          {arr1 ? (
            arr1.map((items, index) => {
              return (
                <div key={index}>
                  <Row
                    setXYVal={SetXYVal}
                    arr={items}
                    indexUp={index}
                    key={index}
                  />
                  <br />
                </div>
              );
            })
          ) : (
            <h1>loading</h1>
          )}
        </div>
      </div>
    </div>
  );
}
