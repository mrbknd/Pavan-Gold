import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "@/App.css";
import { Toaster } from "sonner";

import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProtectedRoute from "@/components/ProtectedRoute";
import Home from "@/pages/Home";
import Scheme from "@/pages/Scheme";
import AdminLeads from "@/pages/AdminLeads";
import AdminLogin from "@/pages/AdminLogin";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <AuthProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scheme" element={<Scheme />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/leads"
                element={
                  <ProtectedRoute>
                    <AdminLeads />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
            <WhatsAppFloat />
            <Toaster
              theme="dark"
              position="top-center"
              toastOptions={{
                style: {
                  background: "#0c0406",
                  border: "1px solid rgba(212,175,55,0.35)",
                  color: "#FDFBF7",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem",
                },
              }}
            />
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </div>
  );
}
