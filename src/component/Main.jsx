import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import TestImg from "./TestImg";
import TestShowAllImg from "./TestShowAllImg";
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TestImg" element={<TestImg />} />
        <Route path="/TestShowAllImg" element={<TestShowAllImg />} />
      </Routes>
    </main>
  );
};

export default Main;
