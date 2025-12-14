// components/HeroSection.jsx
import Image from "next/image";
import SplitText from "../../../components/SplitText";

const HeroSection = () => {
  return (
    // <section className="relative bg-linear-to-r from-teal-900 to-green-500 text-white py-20 overflow-hidden">
    <section className="relative  text-black py-20 overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 z-0">
        <Image
          // src="/Travel-PNG-Images-HD.png" // Make sure you have an image at this path
          src="/hero01.svg" // Make sure you have an image at this path
          alt="Inspiring landscape"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-40 sm:bg-left md:bg-left lg:bg-center"
        />
        {/* Overlay for better text contrast */}
        {/* Additional blur effect on the left side for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent backdrop-blur-[0px] lg:backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-serif text-4xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            <SplitText
              text="Your Journey Begins Here"
              className="font-semibold font-serif mb-8 text-princeton-orange-500 text-shadow-lg"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <p className="font-sans text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
            <span className="font-medium italic">Select</span> the best deals on
            flights, hotels, cars, and more in one place.
          </p>
          <button className="bg-sunflower-gold-400 hover:bg-sunflower-gold-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer drop-shadow-md">
            Get Going Today
          </button>
        </div>

        {/* Placeholder for an additional visual element if desired (e.g., product mockups) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          {/* You could add another illustrative image here, perhaps a mock-up of a product or a person achieving success */}
          {/* <Image
            src="/images/hero-illustration.png"
            alt="Success illustration"
            width={500}
            height={400}
            objectFit="contain"
            className="rounded-lg shadow-2xl"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
