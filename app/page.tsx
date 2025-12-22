import Image from "next/image";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Popular from "./components/Sections/Popular/Popular";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col bg-white dark:bg-black">
        <Header />
        <HeroSection />
        <Popular />
      <Footer />
      </main>
    </div>
  );
}
