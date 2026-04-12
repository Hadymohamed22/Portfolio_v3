import About from "./_components/sections/about/about";
import ContactMe from "./_components/sections/contact-me/contact-me";
import Hero from "./_components/sections/hero/hero";
import Services from "./_components/sections/services/services";
import Skills from "./_components/sections/skills/skills";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Services */}
      <Services />

      {/* Contact Me Section */}
      <ContactMe />
    </main>
  );
}
