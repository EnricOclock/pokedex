import type { Pokemon } from "@/store/api/pokemonApi";

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.9501 2.99817C16.2277 2.99817 15.5122 3.14052 14.8447 3.41708C14.1772 3.69364 13.5707 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05008 2.9987C5.59102 2.9987 4.19174 3.5783 3.16008 4.60999C2.12843 5.64166 1.54883 7.04094 1.54883 8.49999C1.54883 9.95905 2.12843 11.3583 3.16008 12.39L12.0001 21.23L20.8401 12.39C21.8717 11.3583 22.4513 9.95905 22.4513 8.49999C22.4513 7.04094 21.8717 5.64166 20.8401 4.60999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface TeamMemberCardProps {
  pokemon: Pokemon;
  onClick?: () => void;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ onClick, pokemon }) => {
  return (
    <div onClick={onClick}  className="group flex shadow-2xl flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:-translate-y-1">
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
      <div className="flex items-center-safe gap-2">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{pokemon.name}</h3>
      <div className="flex gap-2  top-2 right-2 sm:top-4 sm:right-4 bg-black/70 dark:bg-black/70 text-white p-1.5 sm:p-2.5 rounded-full transition-colors hover:text-red-500 backdrop-blur-sm border border-white/20">
        <HeartIcon className="w-4 h-4 sm:w-6 sm:h-6" />
        <p className="text-xs sm:text-sm text-white dark:text-gray-400 mt-1">{pokemon.hp}</p>
      </div>
      </div>
    
    </div>
  );
};