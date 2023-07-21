console.log("hello world");
import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(50);
  const ref = useRef(null);
  // const reffCallback = useCallback((el) => {
  //   if (el) {
  //     ref.current = el;
  //   }
  //   console.log(el)
  // }, []);
  useEffect(() => {
    function checkVisible(elm) {
      var rect = elm.getBoundingClientRect();
      var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }
    function onScroll() {
      if (checkVisible(ref.current)) {
        setCount((p) => {
          return p + 50;
        });
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const result = () => {
    let arr = [];
    for (let i = 0; i < count; i++) {
      if (i === count - 1) {
        arr.push(<div ref={ref}>{i}</div>);
        continue;
      }
      arr.push(<div key={i + Math.random()}>{i}</div>);
    }
    return arr;
  };
  const map = result();

  return (
    <div className="App">
      <div
        style={{
          position: "fixed",
          top: "0px",
        }}
      >
        {count}
      </div>
      {/* {map.map((el, i) => {
        if (i === map.length - 1) {
          return (
            <div ref={ref} key={el + i}>
              {el}
            </div>
          );
        }
        return <div key={el + i}>{el}</div>;
      })} */}
      {map}
    </div>
  );
}

