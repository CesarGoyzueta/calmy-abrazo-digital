import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const SobreCalmy = lazy(() => import("./pages/SobreCalmy.tsx"));
const Privacidad = lazy(() => import("./pages/Privacidad.tsx"));
const Terminos = lazy(() => import("./pages/Terminos.tsx"));
const LibroReclamaciones = lazy(() => import("./pages/LibroReclamaciones.tsx"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <MotionConfig reducedMotion="user">
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-background" aria-label="Cargando página" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-calmy" element={<SobreCalmy />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/libro-reclamaciones" element={<LibroReclamaciones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </MotionConfig>
);

export default App;
