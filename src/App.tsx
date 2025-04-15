import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutSection from './components/home/AboutSection';
import ArtSection from './components/home/ArtSection';
import ContactSection from './components/home/ContactSection';
import HeroSection from './components/home/HeroSection';
import ProjectsSection from './components/home/ProjectsSection';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/hero">Hero</Link>
          <Link to="/art">Art</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/art" element={<ArtSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;