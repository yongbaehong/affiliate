// components/HeroSection.jsx
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className=" relative bg-linear-to-r from-teal-900 to-green-500 text-white py-20 overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Travel-PNG-Images-HD.png" // Make sure you have an image at this path
          alt="Inspiring landscape"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Overlay for better text contrast */}
        {/* Additional blur effect on the left side for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent backdrop-blur-[0px] lg:backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-serif text-4xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Your Journey Starts Here
          </h1>
          <p className="font-sans text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
            Find the best deals on flights, hotels, cars, and more in one place.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer drop-shadow-md">
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
