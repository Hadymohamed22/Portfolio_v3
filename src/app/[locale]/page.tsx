import About from "./_components/sections/about/about";
import Blog from "./_components/sections/blog/blog";
import ContactMe from "./_components/sections/contact-me/contact-me";
import Hero from "./_components/sections/hero/hero";
import Projects from "./_components/sections/projects/projects";
import Services from "./_components/sections/services/services";
import Skills from "./_components/sections/skills/skills";
import Testimonials from "./_components/sections/testmonials/testimonials";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Services */}
      <Services />

      {/* Blog */}
      <Blog />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Me Section */}
      <ContactMe />
    </main>
  );
}
