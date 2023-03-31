import { Route, Routes as RouteLib } from "react-router-dom";
import { Hero } from "../pages/Hero";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<Home />} />
      <Route path="/hero/:id" element={<Hero />} />
    </RouteLib>
  );
};
