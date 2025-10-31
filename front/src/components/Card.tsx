'use client'

import type { Pokemon } from '@/store/api/pokemonApi';
import { Badge } from './ui/badge';




// SVG Icon Components
const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.9501 2.99817C16.2277 2.99817 15.5122 3.14052 14.8447 3.41708C14.1772 3.69364 13.5707 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05008 2.9987C5.59102 2.9987 4.19174 3.5783 3.16008 4.60999C2.12843 5.64166 1.54883 7.04094 1.54883 8.49999C1.54883 9.95905 2.12843 11.3583 3.16008 12.39L12.0001 21.23L20.8401 12.39C21.8717 11.3583 22.4513 9.95905 22.4513 8.49999C22.4513 7.04094 21.8717 5.64166 20.8401 4.60999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function Card ({ id, name, hp, atk, def, atk_spe, def_spe, speed, types }: Pokemon) {
  

  return (
    <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/50 dark:hover:shadow-black/40 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-700 w-full font-space-grotesk">
      <div className="relative p-2 sm:p-2.5">
          {/* Card Image Section */}
          <div className="relative">
            <img src={`./img/${id}.webp`} alt={name} className="shadow-2xl w-full h-auto rounded-xl sm:rounded-2xl object-cover aspect-square" />


            <div className="flex gap-2 absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 dark:bg-black/70 text-white p-1.5 sm:p-2.5 rounded-full transition-colors hover:text-red-500 backdrop-blur-sm border border-white/20">
              <HeartIcon className="w-4 h-4 sm:w-6 sm:h-6" />
              <p className="text-xs sm:text-sm text-white dark:text-gray-400 mt-1">{hp}</p>
            </div>

          </div>

          {/* Card Content Section */}
          <div className="mt-3 sm:mt-4 px-1 sm:px-1.5 pb-2 sm:pb-3 pt-1 sm:pt-2">
            <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white truncate pr-2" title={name}>{name}</h3>
                {types?.map((type) => (
                <Badge key={type.id}>{type.name}</Badge>))}
            </div>

            

            <div className="mt-3 sm:mt-4 flex justify-between items-center">
              <p className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">Attaque</p>
              <p className="text-sm sm:text-lg font-bold text-cyan-600 dark:text-cyan-400">{atk}</p>
            </div>
            <div className="mt-3 sm:mt-4 flex justify-between items-center">
              <p className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">Défense</p>
              <p className="text-sm sm:text-lg font-bold text-cyan-600 dark:text-cyan-400">{def}</p>
            </div>
            <div className="mt-3 sm:mt-4 flex justify-between items-center">
              <p className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">Attaque spéciale</p>
              <p className="text-sm sm:text-lg font-bold text-cyan-600 dark:text-cyan-400">{atk_spe}</p>
            </div>
            <div className="mt-3 sm:mt-4 flex justify-between items-center">
              <p className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">Défense spéciale</p>
              <p className="text-sm sm:text-lg font-bold text-cyan-600 dark:text-cyan-400">{def_spe}</p>
            </div>
            <div className="mt-3 sm:mt-4 flex justify-between items-center">
              <p className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">Speed</p>
              <p className="text-sm sm:text-lg font-bold text-cyan-600 dark:text-cyan-400">{speed}</p>
            </div>
          </div>
      </div>
    </div>
  );
};