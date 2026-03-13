import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const DesertSafari = lazy(() => import("./pages/DesertSafari"));
const HotelRooms = lazy(() => import("./pages/HotelRooms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GenerateImages = lazy(() => import("./pages/GenerateImages"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/desert-safari" element={<DesertSafari />} />
            <Route path="/hotel-rooms" element={<HotelRooms />} />
            <Route path="/admin/generate-images" element={<GenerateImages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
