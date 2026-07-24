import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
