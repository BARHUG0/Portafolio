import { useState } from "react";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Website from "@pages/areas/Website";

const navItems = [
  { name: "Websites", url: "#websites" },
  { name: "Side projects", url: "#side" },
  { name: "Skills", url: "#skills" },
];

function App() {
  return (
    <>
      <Header logoSrc="hdaniyyel" navItems={navItems} ctaText="Work with me" />
      <Hero />
      <Website />
    </>
  );
}

export default App;
