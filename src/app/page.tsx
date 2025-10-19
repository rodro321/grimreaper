'use client';
import Image from "next/image";
import logo from "./resources/grim.png";
import { FaTwitch, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Home() {
  const players = [
    { name: "vacante", role: "Mid" },
    { name: "vacante", role: "Top" },
    { name: "vacante", role: "ADC" },
    { name: "Jhudal", role: "Support" },
  ];

  const socials = [
    { name: "Twitch", url: "#", icon: <FaTwitch /> },
    { name: "Twitter", url: "#", icon: <FaTwitter /> },
    { name: "Instagram", url: "#", icon: <FaInstagram /> },
    { name: "Discord", url: "#", icon: <FaDiscord /> },
  ];

  return (
    <main className="flex flex-col items-center px-6 py-12 space-y-16 bg-gradient-to-b from-[#1e1e1e] to-[#141414]">

      {/* Hero */}
      <section className="max-w-2xl text-center space-y-4">
        <Image
          src={logo}
          alt="Grim Reaper Logo"
          width={80}
          height={80}
          className="mx-auto rounded-full border-2 border-[#d7c89c] shadow-lg"
        />
        <h1 className="text-4xl font-bold text-white">Bienvenido al equipo Grim Reaper</h1>
        <p className="text-[#d7c89c] text-lg">
          Somos un equipo de esports enfocado en la excelencia, el trabajo en equipo y la victoria.
        </p>
        <button className="bg-[#d7c89c] text-[#1e1e1e] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
          Ver jugadores
        </button>
      </section>

      {/* Jugadores */}
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Nuestro Equipo</h2>
        <div className="card text grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {players.map((player) => (
            <div
              key={player.name}
              className="bg-[#2a2a2a] p-4 text-center shadow-md hover:shadow-xl rounded-lg flex flex-col items-center transition"
            >
              <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4 text-[#d7c89c] text-2xl">
                {player.name[0]}
              </div>
              <h3 className="text-white mt-2 font-semibold">{player.name}</h3>
              <p className="text-[#d7c89c]">{player.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Historia */}
      <section className="max-w-3xl text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Nuestra Historia</h2>
        <p className="text-[#d7c89c]">
          Grim Reaper Esports nació en 2024 con la pasión por competir en los mejores torneos de League of Legends.
          Nuestro equipo se basa en disciplina, estrategia y compañerismo.
        </p>
      </section>

      {/* Logros */}
      <section className="w-full max-w-4xl text-center space-y-3">
        <h2 className="text-2xl font-bold text-white mb-4">Logros Recientes</h2>
        <ul className="space-y-2 text-[#d7c89c]">
          <li>🏆 NO hay logros recientes</li>
        </ul>
      </section>

      {/* Redes Sociales */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Síguenos</h2>
        <div className="flex justify-center gap-6 mt-2 text-2xl text-[#d7c89c]">
          {socials.map((social) => (
            <a key={social.name} href={social.url} className="hover:text-white transition" title={social.name}>
              {social.icon}
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}
