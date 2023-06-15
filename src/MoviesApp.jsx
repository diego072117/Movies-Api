import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const MoviesApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
