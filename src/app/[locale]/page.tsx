import About from "./_components/sections/about/about";
import ContactMe from "./_components/sections/contact-me/contact-me";
import Hero from "./_components/sections/hero/hero";
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

      {/* Contact Me Section */}
      <ContactMe />
    </main>
  );
}
