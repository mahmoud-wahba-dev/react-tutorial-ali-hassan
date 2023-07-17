import { useState } from "react";
import "./App.css";
import "./themes.css";

function App() {
  const [person, changeName] = useState("Ali hassan");
  const [age, setAge] = useState(28);
  let [count, setCount] = useState(0);
  let [theme, setTheme] = useState("");
  const changeAge = () => {
    setAge(33);
  };

  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <div className={`app ${theme}`}>
      <button
        onClick={() => setTheme(theme == "" ? "dark" : "")}
        style={{ marginBottom: "20px" }}
      >
        toggle theme
      </button>
      <br />
      <div
      onChange={() => setTheme(theme == "" ? "dark" : "")}
       style={{ marginBottom: "20px" }}
        className="btn-container"
      >
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>
      <div>
        <button onClick={() => setTheme("")} style={{ marginRight: "20px" }}>
          light
        </button>
        <button
          onClick={() => setTheme("dark")}
          style={{ marginRight: "20px" }}
        >
          dark
        </button>
        <button
          onClick={() => setTheme("grey")}
          style={{ marginRight: "20px" }}
        >
          grey
        </button>
        <button
          onClick={() => setTheme("pink")}
          style={{ marginRight: "20px" }}
        >
          pink
        </button>
      </div>
      <h1>ny name is {person} </h1>
      <button
        onClick={() => {
          changeName("elrayek");
        }}
      >
        count is 0
      </button>
      <br /> <br />
      <h2>my age is {age} </h2>
      <button onClick={changeAge}>change Age</button>
      <br /> <br />
      <button onClick={changeCount}>count is {count}</button>
    </div>
  );
}

export default App;
