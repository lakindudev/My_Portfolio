"use client";

import { navItems } from "@/data";
import { useEffect } from "react";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // This will now only run on the client side
      console.log("Client-side rendering");
    }
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <TechStack />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
