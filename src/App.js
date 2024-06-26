import "./App.css";
import Weather from "./weather";
import "./Weather.css";

function App() {
  return (
    <div>
      <Weather />
      <footer>
        <p className="name">
          This project was coded by{" "}
          <a href="https://github.com/Tarirohope">
            Priscila Tariro Kapuyanyika
          </a>{" "}
          and is hosted on{" "}
          <a href="https://pkapuyanyika.netlify.app/">Netlify</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
