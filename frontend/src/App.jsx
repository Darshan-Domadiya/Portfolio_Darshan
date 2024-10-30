import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import "./index.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
