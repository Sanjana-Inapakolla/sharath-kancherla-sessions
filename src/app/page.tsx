import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sessions from "@/components/Sessions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Sessions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
