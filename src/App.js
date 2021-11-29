import "./styles.css";
import Hello from "./Hello.js";

export default function App() {
  return (
    <div className="App">
      <Hello names={["Niki", "World", "Darga"]} />
    </div>
  );
}
