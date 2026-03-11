import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from "@/components/MainNavbar";
import HomePage from "./pages/HomePage";
import RadiosPage from "./pages/RadiosPage";
import IPTVPage from "./pages/IPTVPage";
import ArticlesPage from "./pages/ArticlesPage";
import JetonsPage from "./pages/JetonsPage";
import ReligionPage from "./pages/ReligionPage";
import LivreBlancPage from "./pages/LivreBlancPage";
import AlgiersRadioPage from "./pages/AlgiersRadioPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/radios" element={<RadiosPage />} />
          <Route path="/iptv" element={<IPTVPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/jetons" element={<JetonsPage />} />
          <Route path="/religion" element={<ReligionPage />} />
          <Route path="/livre-blanc" element={<LivreBlancPage />} />
          <Route path="/algiers-radio" element={<AlgiersRadioPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
