import PlayerCard from "./components/PlayerCard";

export default function Jugadores() {
  const players = [
    {
      name: "Ismael",
      role: "Mid",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    },
    {
      name: "Santiago",
      role: "Top",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
    },
    {
      name: "Pol",
      role: "ADC",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
    },
    {
      name: "Enrique",
      role: "Support",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg",
    },
    {
      name: "Jungla",
      role: "Jungle",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
    },
  ];

  return (
    <main className="flex flex-col items-center px-6 py-16 space-y-16 bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e] min-h-screen">
      <h1 className="text-5xl font-extrabold text-white mb-12 drop-shadow-lg">
        Jugadores de Grim Reaper
      </h1>

      <div className="grid grid-cols-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center w-full max-w-7xl">
        {players.map(player => (
          <PlayerCard
            key={player.name}
            name={player.name}
            role={player.role}
            img={player.img}
          />
        ))}
      </div>
    </main>
  );
}
