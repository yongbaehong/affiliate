"use client";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="relative bg-base-200 text-base-content p-10">
        <div className="absolute inset-0 z-0 bg-(--color-bright-marine-500)">
          {/* Overlay for better text contrast */}
          {/* Additional blur effect on the left side for better text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-white/50 via-transparent to-transparent backdrop-blur-[0px] lg:backdrop-blur-[0.5px]" />
        </div>

        <div className="lg:p-4 relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between backdrop-blur-[2px] lg:backdrop-blur-[5px] sm:p-1 rounded-lg">
          <p className="font-bold text-transform: uppercase">Legal</p>
          <p className="cursor-pointer">
            <Link href="/privacy">Privacy Policy</Link>
          </p>
          <p className="cursor-pointer">
            <Link href="/terms">Terms of Service</Link>
          </p>
          <p className="cursor-pointer">
            <Link href="/contact">Contact Us</Link>
          </p>
        </div>
      </footer>
      <footer className="bg-base-200 text-base-content p-4 text-center">
        <div className="relative z-10 mt-2 text-center">
          <p className="text-sm">
            This is a travel affiliate website. We may earn a commission
            from bookings made through links on our site at no additional cost
            to you.
          </p>
        </div>
        <br className="border-2 border-blue-600"/>
        <div className="relative z-10 mt-0 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LocoTraveler. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
