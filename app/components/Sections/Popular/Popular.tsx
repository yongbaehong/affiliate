"use client";
import SplitText from "../../../../components/SplitText";
export default function Popular() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center mb-8">
          <SplitText
            text="Popoular Destinations"
            className="text-4xl font-semibold font-serif mb-8"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example popular destinations */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg"
              alt="Destination 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Paris, France</h3>
              <p className="text-gray-600">The city of lights and love.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/michael-discenza-5omwAMDxmkU-unsplash.jpg"
              alt="Destination 2"
              className="w-full h-48 object-cover bg-bottom"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">New York, USA</h3>
              <p className="text-gray-600">The city that never sleeps.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/yu-kato-q9rSwpv5mFk-unsplash.jpg"
              alt="Destination 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Seoul, South Korea</h3>
              <p className="text-gray-600">
                A vibrant city blending tradition and modernity.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/ahmet-yalcinkaya-aNrRsB2wLDk-unsplash.jpg"
              alt="Destination 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">California, USA</h3>
              <p className="text-gray-600">
                Known for its diverse climate and geography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
