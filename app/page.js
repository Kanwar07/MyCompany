import About from "./sections/About";
import AppDevelopment from "./sections/AppDevelopment";
import Contact from "./sections/Contact";
import DevelopmentCycle from "./sections/DevelopmentCycle";
import FAQ from "./sections/FAQ";
import Footer from "./components/Footer";
import IndustriesProjects from "./sections/IndustriesProjects";
import Projects from "./sections/Projects";
import Team from "./sections/Team";

export default function Home() {
  return (
    <main>
      <About />
      <section id="DevelopmentCycle">
        <DevelopmentCycle />
      </section>
      <section id="IndustriesProjects">
        <IndustriesProjects />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <AppDevelopment />
      <Team />
      <section id="FAQ">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}
