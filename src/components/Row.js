import styles from "../css/row.module.css";
export default function Row({ arr, indexUp, setXYVal }) {
  return (
    <div className={styles.cont}>
      {arr.map((num, index) => {
        return (
          <div key={index}>
            {index % 2 === 0 ? (
              <div
                className={styles.oddSquare}
                key={index}
                onClick={() => {
                  setXYVal([index, indexUp]);
                }}
              >
                {num}
              </div>
            ) : (
              <div
                className={styles.evenSquare}
                key={index}
                onClick={() => {
                  setXYVal([index, indexUp]);
                }}
              >
                {num}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
