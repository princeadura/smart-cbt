import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { Box } from "@chakra-ui/react";
import PageLayout from "./ui/layouts/PageLayout";
import ScrollToTop from "./ui/ScrollTop";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";



function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box overflow="hidden">
      <BrowserRouter>
        <Routes>

          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
          </Route>

        </Routes>
      <ScrollToTop/>
      </BrowserRouter>
    </Box>
  );
}

export default App;
