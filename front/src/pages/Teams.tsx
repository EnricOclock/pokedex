'use client'
import React from 'react';
import Modal from "../components/ui/modal";
import { useState } from 'react';
import OrbitCarousel from '@/components/ui/orbit-carousel';
import { useGetAllTeamsQuery } from "@/store/api/teamApi";
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { Team } from "@/store/api/teamApi";

export interface TeamMemberCardProps {
  team: Team;
  onClick?: () => void;
}

//Sub-component for rendering a single team member's card
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ team, onClick }) => (
  <div onClick={onClick} className="flex shadow-xl border-2 rounded-md flex-col items-center text-center justify-center">
    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{team.name}</h3>
  </div>
);

// Main component that renders the entire section
const Teams: React.FC = () => {

  const [showTeamModal, setShowTeamModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const teamMembers = selectedTeam?.pokemons

  const { data: teams, isLoading, isError, error} = useGetAllTeamsQuery(); 

  console.log('MEMBERS SELECTED: ', teamMembers)


  if (isLoading) return <p>Chargement...</p>;
  if (isError) return <p>Erreur : {(error as FetchBaseQueryError).status}</p>;

  function handleShowTeam (team: Team) {
    setSelectedTeam(team);
    setShowTeamModal(true);
  }

  console.log('TEAM DATA :',  teams)

  return (
    <section className="font-sans">
      <div className=" relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Meet the brains
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
            These people work on making our product best.
          </p>
        </div>

        {/* Team Members Grid - Adjusted for 12 members */}
        <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12 p-4 border rounded-2xl shadow-2xl">
          {teams?.map((team) => (
            
            <TeamMemberCard onClick={() => handleShowTeam(team)} key={team.name} team={team} />
           
          ))}
        </div>
              <Modal
                isOpen={showTeamModal}
                onClose={() => setShowTeamModal(false)}
                title={`${selectedTeam?.name}`}
              >
                <OrbitCarousel teamMembers={teamMembers}/>
          
              </Modal>
      </div>
    </section>
  );
};

export default Teams;