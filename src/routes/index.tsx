import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Loadable from "components/Loadable";
import Layout from "layouts";

const Home = Loadable(lazy(() => import("pages/Home")));
const Flip = Loadable(lazy(() => import("pages/Flip")));
const Fliphome = Loadable(lazy(() => import("pages/Flip/home")));

export default function ThemeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/flip-flop-frenzy" element={<Flip />} />
        <Route path="/flip-flop-frenzy/home" element={<Fliphome />} />
      </Route>
    </Routes>
  );
}
