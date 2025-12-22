"use client";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="max-w-3xl space-y-4 text-lg">
          <p>
            At LocoTraveler, we are committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and safeguard your
            personal information when you use our services.
          </p>
          <h2 className="text-2xl font-semibold mt-4">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, and payment details when you make a booking or sign up for
            our newsletter.
          </p>
          <h2 className="text-2xl font-semibold mt-4">
            How We Use Your Information
          </h2>
          <p>
            We use your information to process bookings, send you updates about
            your reservations, and improve our services. We do not share your
            personal information with third parties without your consent.
          </p>
          <h2 className="text-2xl font-semibold mt-4">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
          <h2 className="text-2xl font-semibold mt-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. You can also opt-out of receiving marketing
            communications from us at any time.
          </p>
          <h2 className="text-2xl font-semibold mt-4">Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at locotraveler@gmail.com.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
