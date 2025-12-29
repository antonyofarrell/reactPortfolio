import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const el = document.querySelector(hash);
    if (!el) return;

    // Wait for route content to mount
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
