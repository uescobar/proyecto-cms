import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CMS from "./components/CMS";

function App() {
  const [count, setCount] = useState(0);

  return <CMS />;
}

export default App;
