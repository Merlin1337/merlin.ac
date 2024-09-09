import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

const navigation = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl font-bold text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text uppercase"
      // style={{transform: "scaleY(1.1)"}}
      >
        Merlin
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in flex flex-col items-center">
        <h2 className="text-lg text-zinc-500 font-normal hover:text-zinc-200 ease-in-out transition-colors duration-500 relative glitch">
          FULL STACK DEVELOPER
          <span aria-hidden="true" className="absolute top-0 left-0 w-full h-full glitch-text"></span>
          <span aria-hidden="true" className="absolute top-0 left-0 w-full h-full glitch-text-2"></span>
        </h2>
        <Link href="https://naiart.fr" target="_blank" className="ease-in-out transition-transform hover:scale-110 duration-700 mt-2">
          <Image
            src="/naiart.svg"
            alt="Naiart logo"
            width={133}
            height={24}
            className="hover:opacity-70 ease-in-out transition-opacity duration-500 opacity-35"
          />
        </Link>
      </div>

    </div>
  );

}
