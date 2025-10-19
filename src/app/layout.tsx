'use client';
import "./globals.css";
import logo from "./resources/grim.png";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiMail } from "react-icons/fi";
import { FaUserFriends, FaTrophy } from "react-icons/fa";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-[#1e1e1e] text-[#d7c89c] font-sans">

        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-[#2a2a2a] shadow-md relative">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="Grim Reaper Logo"
              width={60}
              height={60}
              className="rounded-full border-2 border-[#d7c89c] shadow-lg"
            />
            <h1 className="text-2xl font-bold text-white tracking-wide">Grim Reaper Esports</h1>
          </div>


          {/* Contenedor relativo para botón y menú */}
          <div className="relative md:hidden">
            <button
              className="text-[#d7c89c]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>

            {menuOpen && (
              <div className="card absolute top-full right-0 mt-2 min-w-[180px] bg-[#2a2a2a] rounded shadow-lg flex flex-col p-2 z-20 text-right origin-top-right">
                <a href="#" className="flex items-center gap-5 px-3 py-2 rounded hover:bg-[#3a3a3a] transition">
                  <FaUserFriends /> Jugadores
                </a>

                <a href="#" className="flex items-center gap-5 px-3 py-2 rounded hover:bg-[#3a3a3a] transition">
                  <FaTrophy />  Torneos
                </a>
                <a href="#" className="flex items-center gap-5 px-3 py-2 rounded hover:bg-[#3a3a3a] transition">
                  <FiMail />  Contacto
                </a>
              </div>
            )}
          </div>


        </header>

        {/* Contenido */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer minimalista */}
        <footer className="bg-[#2a2a2a] p-6 flex flex-col items-center gap-3">
          <Image
            src={logo}
            alt="Grim Reaper Logo"
            width={50}
            height={50}
            className="rounded-full border-2 border-[#d7c89c] shadow-md"
          />
          <span className="text-sm text-[#ccccb3]">© {year} Grim Reaper Esports</span>
          <div className="flex gap-4">
            <a href="/aviso-legal" className="text-[#ccccb3] hover:text-white transition">Aviso Legal</a>
            <a href="/politica-cookies" className="text-[#ccccb3] hover:text-white transition">Política de Cookies</a>
            <a href="/privacidad" className="text-[#ccccb3] hover:text-white transition">Privacidad</a>
          </div>
        </footer>

      </body>
    </html>
  );
}
