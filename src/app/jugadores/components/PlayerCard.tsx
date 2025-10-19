interface PlayerCardProps {
  name: string;
  role: string;
  img: string;
}

import Image from "next/image";

export default function PlayerCard({ name, role, img }: PlayerCardProps) {
  return (
    <div className="card text flex flex-col items-center bg-[#2a2a2a] rounded-3xl w-80 h-96 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
      {/* Imagen de campeón grande */}
      <div className="w-48 h-48 rounded-full overflow-hidden mt-6">
        <Image src={img} alt={name} width={192} height={192} className="object-cover" />
      </div>

      {/* Nombre */}
      <h3 className="text-white text-3xl font-bold mt-4 text-center">{name}</h3>

      {/* Rol */}
      <p className="text-[#d7c89c] text-xl text-center">{role}</p>
    </div>
  );
}
