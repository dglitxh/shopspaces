"use client";
import { Container } from "@mui/material";
import React from "react";
import Hero from "./landing/hero";
import MainNav from "./landing/nav";
import MediaCards from "./landing/cards";
import Pricing from "./landing/pricing";
import About from "./landing/about";
import Footer from "./landing/footer";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Hero />
        <About />
        <MediaCards />
        <Pricing />
        <Footer />
      </main>
    </Container>
  );
}
