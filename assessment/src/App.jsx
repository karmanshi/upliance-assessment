import "./index.css";
import Layout from "./components/layout";
import CounterComponent from "./components/counter";
import { Routes, Route } from "react-router-dom";
import TexteditorComponent from "./components/texteditor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/counter" element={<CounterComponent />} />
          <Route path="/text-editor" element={<TexteditorComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
