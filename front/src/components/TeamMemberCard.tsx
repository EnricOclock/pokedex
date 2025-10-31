import type { Pokemon } from "@/store/api/pokemonApi";

interface TeamMemberCardProps {
  pokemon: Pokemon;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ pokemon }) => {
  return (
    <div className="group flex shadow-2xl flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:-translate-y-1">
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
        <div className="absolute inset-0 bg-linear-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <img
          className="relative w-full h-full rounded-full object-cover ring-4 ring-white dark:ring-gray-800 group-hover:ring-gray-100 dark:group-hover:ring-gray-700 transition-all duration-300"
          src={`./img/${pokemon.id}.webp`}
          alt={`Portrait of ${pokemon.name}`}
          // Basic fallback in case image fails to load
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = `https://placehold.co/200x200/E2E8F0/4A5568?text=${pokemon.name.split(' ').map(n => n[0]).join('')}`;
          }}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{pokemon.name}</h3>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4 px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-full">{pokemon.hp}</p>
    </div>
  );
};