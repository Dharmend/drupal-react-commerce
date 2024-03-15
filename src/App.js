
import Humberger from "./Component/Header/Humberger.js";
import Header from "./Component/Header/Header.js";
import HeroSection from "./Component/Home/HeroSection/HeroSection.js";
import CategorySection from "./Component/Home/CategorySection/CategorySection.js";
import FeaturesSection from "./Component/Home/FeaturedSection/FeaturedSection.js";
import BannerSection from "./Component/Home/BannerSection.js";
import LatestProductSection from "./Component/Home/LatestProductSection.js";
import BlogSection from "./Component/Home/BlogSection.js";
import FooterSection from "./Component/Home/FooterSection.js";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { productListing } from './Component/Utility/Api';
import React, { Component }  from 'react';
import {Routes, Route} from 'react-router-dom';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Humberger></Humberger>
        <Header></Header>
        <HeroSection></HeroSection>
        <CategorySection></CategorySection>
        <FeaturesSection></FeaturesSection>
        <BannerSection></BannerSection>
        <LatestProductSection></LatestProductSection>
        <BlogSection></BlogSection>
        <FooterSection></FooterSection>
    </QueryClientProvider>
  );
}

export default App;
