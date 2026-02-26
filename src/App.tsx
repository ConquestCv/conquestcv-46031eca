import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import { PersonaProvider, usePersona } from "./hooks/use-persona";
import Layout from "./components/layout/Layout";
import PageTransition from "./components/PageTransition";

// Web2 Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";

// Web3 Pages
import Web3HomePage from "./pages/web3/Web3HomePage";
import Web3AboutPage from "./pages/web3/Web3AboutPage";
import Web3ExperiencePage from "./pages/web3/Web3ExperiencePage";
import Web3SkillsPage from "./pages/web3/Web3SkillsPage";
import Web3EducationPage from "./pages/web3/Web3EducationPage";
import Web3ContactPage from "./pages/web3/Web3ContactPage";
import Web3AuditsPage from "./pages/web3/Web3AuditsPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PersonaRoutes = () => {
  const { persona } = usePersona();

  return (
    <PageTransition>
      <Routes>
        {persona === "web2" ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Web3HomePage />} />
            <Route path="/about" element={<Web3AboutPage />} />
            <Route path="/experience" element={<Web3ExperiencePage />} />
            <Route path="/skills" element={<Web3SkillsPage />} />
            <Route path="/education" element={<Web3EducationPage />} />
            <Route path="/contact" element={<Web3ContactPage />} />
            <Route path="/audits" element={<Web3AuditsPage />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <PersonaProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <PersonaRoutes />
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </PersonaProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
