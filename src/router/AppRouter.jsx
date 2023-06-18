import { Routes, Route } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import { Details } from "../pages/DetailsMovie/Details";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { Search } from "../pages/Search/Search";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movieDetails/:id'  element={<Details />}/>
        <Route path='/searchMovie'  element={<Search />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Nav />
    </>
  );
};
