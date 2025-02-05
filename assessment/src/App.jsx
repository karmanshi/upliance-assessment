import "./index.css";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import { all_components } from "./components/paths";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {all_components.map((elem) => (
            <Route path={elem.route} element={elem.component} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
