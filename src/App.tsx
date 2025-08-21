
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./website/home/HomePage";
import ContactUsPage from "./website/contact-us/ContactUsPage";
import IEPFClaimPage from "./website/iepf-claim-recovery/IEPFClaimPage";
import BlogPage from "./website/blog/BlogPage";
import PromptReadyPage from "./website/prompt-ready/PromptReadyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/iepf-claim-recovery" element={<IEPFClaimPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/prompt-ready" element={<PromptReadyPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
