import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TeamSingle from "./pages/TeamSingle";
import Team from "./pages/Team";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Pages";
import PagesSingle from "./pages/PagesSingle";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AppoinmentList from "./pages/admin/AppoinmentList";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/team":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/pages":
        title = "";
        metaDescription = "";
        break;
      case "/pagessingle":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/blogsingle":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/teamsingle" element={<TeamSingle />} />
      <Route path="/about" element={<About />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/pagessingle" element={<PagesSingle />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogsingle" element={<BlogSingle />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin" element={<AppoinmentList />} />
    </Routes>
  );
}
export default App;
