import { Route, Routes as RouteLib } from "react-router-dom";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<Home />} />
    </RouteLib>
  );
};
