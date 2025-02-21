import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/ui/loading";
import { useRoutes, Routes, Route } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./components/home"));
const ServicesPage = lazy(() => import("./pages/Services"));
const AboutPage = lazy(() => import("./pages/About"));
const PortfolioPage = lazy(() => import("./pages/Portfolio"));
const Gallery = lazy(() => import("./components/Gallery"));
const ContactPage = lazy(() => import("./pages/Contact"));
const AdminLayout = lazy(() => import("./components/admin/Layout"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const GalleryManagement = lazy(() => import("./pages/admin/GalleryManagement"));
const PortfolioManagement = lazy(
  () => import("./pages/admin/PortfolioManagement"),
);
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AuthGuard = lazy(() => import("./components/admin/AuthGuard"));
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
