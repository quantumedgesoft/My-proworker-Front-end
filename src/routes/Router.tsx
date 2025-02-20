import { Route, Routes } from "react-router";
import PrimaryLayout from "../components/layout/PrimaryLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PrimaryLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default Router;
