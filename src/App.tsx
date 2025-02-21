import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import Gallery from "./components/Gallery";
import ContactPage from "./pages/Contact";
import AdminLayout from "./components/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import GalleryManagement from "./pages/admin/GalleryManagement";
import PortfolioManagement from "./pages/admin/PortfolioManagement";
import AdminLogin from "./pages/admin/Login";
import AuthGuard from "./components/admin/AuthGuard";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/quem-somos" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contato" element={<ContactPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <AuthGuard>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </AuthGuard>
            }
          />
          <Route
            path="/admin/gallery"
            element={
              <AuthGuard>
                <AdminLayout>
                  <GalleryManagement />
                </AdminLayout>
              </AuthGuard>
            }
          />
          <Route
            path="/admin/portfolio"
            element={
              <AuthGuard>
                <AdminLayout>
                  <PortfolioManagement />
                </AdminLayout>
              </AuthGuard>
            }
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
