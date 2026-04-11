import About from "./_components/sections/about/about";
import ContactMe from "./_components/sections/contact-me/contact-me";
import Hero from "./_components/sections/hero/hero";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Contact Me Section */}
      <ContactMe />
    </main>
  );
}
