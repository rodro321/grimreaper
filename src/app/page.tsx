'use client';
import { useRef } from "react";
import Image from "next/image";
import logo from "./resources/grim.png";
import { FaDiscord, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiMagicSwirl, GiShield, GiWingedSword, GiHeartPlus } from "react-icons/gi";

export default function Home() {
  const roles = [
    {
      name: "Mid",
      icon: <GiMagicSwirl className="text-[#d7c89c] text-4xl" />,
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    },
    {
      name: "Top",
      icon: <GiShield className="text-[#d7c89c] text-4xl" />,
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
    },
    {
      name: "ADC",
      icon: <GiWingedSword className="text-[#d7c89c] text-4xl" />,
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
    },
    {
      name: "Support",
      icon: <GiHeartPlus className="text-[#d7c89c] text-4xl" />,
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg",
    },
    {
      name: "Jungle",
      icon: <GiMagicSwirl className="text-[#d7c89c] text-4xl" />,
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
    },
    {
      name: "Assassin",
      icon: <GiWingedSword className="text-[#d7c89c] text-4xl" />,
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <main className="flex flex-col items-center px-6 py-16 space-y-24 bg-gradient-to-b from-[#151515] to-[#0c0c0c] overflow-hidden">

      {/* Hero */}
      <section className="max-w-3xl text-center space-y-6">
        <Image
          src={logo}
          alt="Grim Reaper Logo"
          width={120}
          height={120}
          className="mx-auto rounded-full border-2 border-[#d7c89c] shadow-[0_0_15px_#d7c89c50]"
        />
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">Equipo Grim Reaper</h1>
        <p className="text-[#d7c89c] text-lg leading-relaxed opacity-90">
          Somos un equipo de esports apasionado por la estrategia, la disciplina y la victoria.
          En Grim Reaper creemos en el trabajo en equipo y la constancia.
        </p>
        <a
          href="/jugadores"
          className="bg-[#d7c89c] text-[#1e1e1e] font-bold px-8 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-[0_0_12px_#d7c89c80] transition inline-block"
        >
          Ver jugadores
        </a>
      </section>

      {/* Roles con carrusel */}
      <section className="relative w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Roles del Equipo</h2>

        {/* Flecha izquierda */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 bg-[#d7c89c20] hover:bg-[#d7c89c40] p-4 rounded-full text-[#d7c89c] hover:scale-110 transition z-10"
        >
          <FaChevronLeft size={26} />
        </button>

        {/* Contenedor scroll sin barra */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll gap-6 px-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
        >
          {roles.map((role) => (
            <div
              key={role.name}
              className="relative flex-shrink-0 w-80 h-80 rounded-3xl overflow-hidden shadow-lg snap-center group"
            >
              <Image
                src={role.img}
                alt={role.name}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300">
                {role.icon}
                <h3 className="text-white text-2xl font-semibold mt-3">{role.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 bg-[#d7c89c20] hover:bg-[#d7c89c40] p-4 rounded-full text-[#d7c89c] hover:scale-110 transition z-10"
        >
          <FaChevronRight size={26} />
        </button>
      </section>

      {/* Historia */}
      <section className="max-w-3xl text-center space-y-5">
        <h2 className="text-3xl font-bold text-white mb-3">Nuestra Historia</h2>
        <p className="text-[#d7c89c] text-lg leading-relaxed opacity-90">
          Fundado en 2024, Grim Reaper Esports nació de la pasión por competir al más alto nivel.
          Nuestra misión es forjar un equipo que combine habilidad, estrategia y unión para alcanzar la gloria en cada partida.
        </p>
      </section>

      {/* Redes */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Síguenos</h2>
        <div className="flex justify-center gap-8 text-3xl text-[#d7c89c]">
          <a
            href="https://discord.gg/zHBZPsuh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_10px_#d7c89c]"
          >
            <FaDiscord />
          </a>
        </div>
      </section>
    </main>
  );
}
