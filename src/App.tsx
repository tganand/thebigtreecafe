import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const DesertSafari = lazy(() => import("./pages/DesertSafari"));
const DesertCamp = lazy(() => import("./pages/DesertCamp"));
const Adventure = lazy(() => import("./pages/Adventure"));
const Sightseeing = lazy(() => import("./pages/Sightseeing"));
const ExoticTours = lazy(() => import("./pages/ExoticTours"));
const SpecialEvents = lazy(() => import("./pages/SpecialEvents"));
const HotelRooms = lazy(() => import("./pages/HotelRooms"));
const NotFound = lazy(() => import("./pages/NotFound"));


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
            <Route path="/desert-camp" element={<DesertCamp />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/sightseeing" element={<Sightseeing />} />
            <Route path="/exotic-tours" element={<ExoticTours />} />
            <Route path="/special-events" element={<SpecialEvents />} />
            <Route path="/hotel-rooms" element={<HotelRooms />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
