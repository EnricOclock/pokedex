'use client'
import React from 'react';
import Modal from "../components/ui/modal";
import { useState } from 'react';
import OrbitCarousel from '@/components/ui/orbit-carousel';
import { Trash } from "lucide-react";
import { useCreateOneTeamMutation, useDeleteOneTeamMutation, useGetAllTeamsQuery, useRemovePokemonToTeamMutation } from "@/store/api/teamApi";
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { Team } from "@/store/api/teamApi";
import { Button } from '@/components/ui/button';




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
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');

  const teamMembers = selectedTeam?.pokemons

  const { data: teams, isLoading: teamsLoading, isError: teamsIsError, error: teamsError} = useGetAllTeamsQuery();
  const [updateTeam, { isLoading: updateIsLoading, isError: updateIsError }] = useCreateOneTeamMutation();
  const [deleteTeam, { isLoading: deleteIsLoading, isError: deleteIsError }] = useDeleteOneTeamMutation();

  const [createTeam, { isLoading, isError }] = useCreateOneTeamMutation();

  if (teamsLoading || isLoading || updateIsLoading || deleteIsLoading) return <p>Chargement...</p>;
  if (teamsIsError || isError || updateIsError || deleteIsError) return <p>Erreur : {(teamsError as FetchBaseQueryError).status}</p>;

  function handleShowTeam (team: Team) {
    setSelectedTeam(team);
    setShowTeamModal(true);
  }

  function handleShowCreateTeamForm () {
    setShowCreateTeamModal(true);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      'name': teamName,
      'description' : teamDescription
    };

    try {
        const response = await createTeam(formData).unwrap();
        console.log('✅ Équipe créée :', response);

        // Reset du form et fermeture de la modal
        setShowCreateTeamModal(false);
        setTeamName('');
        setTeamDescription('');
      } catch (err) {
        console.error('❌ Erreur lors de la création de l’équipe :', err);
      }
  };

  async function handleDeleteTeam (selectedTeamId?: string) {

    if (!selectedTeamId) return;

    const teamId = String(selectedTeamId);

    console.log('TEAMID :', teamId)

    try {
      const response = await deleteTeam( teamId ).unwrap();
      console.log('✅ Équipe supprimée :', response);
      setShowTeamModal(false);
    } catch (err) {
      console.error('❌ Erreur lors de la suppression de l’équipe :', err);
    }
  }

  return (
    <section className="font-sans">
      <div className=" relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ">
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
        <div  className=" gap-6 p-4 border rounded-2xl shadow-2xl">
          <ul className=''>
          {teams?.map((team) => (
            
            <li className='text-center items-center'>
              <TeamMemberCard onClick={() => handleShowTeam(team)} key={team.name} team={team} />  
            </li>
           
          ))}
          </ul>
        </div>
          <Button onClick={handleShowCreateTeamForm} className='w-full'>+</Button>
              <Modal
                isOpen={showTeamModal}
                onClose={() => setShowTeamModal(false)}
                title={`${selectedTeam?.name}`}
              >
                <h1 className='text-center'>{selectedTeam?.description}</h1>
                
                <Button onClick={() => handleDeleteTeam(selectedTeam?.id)}><Trash/></Button>
                <OrbitCarousel teamMembers={teamMembers} />
          
              </Modal>
              <Modal
                isOpen={showCreateTeamModal}
                onClose={() => setShowCreateTeamModal(false)}
                title={"Création d'une équipe"}
              >
                <div className=''>
                  <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                      <label>Saisissez le nom de l'équipe</label>
                      <input 
                        type="text"
                        autoComplete='username'
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        required
                        placeholder="Team Roquette"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        >
                      </input>
                    </div>
                    <div className='space-y-1'>
                      <label >Redigez une courte déscription</label>
                      <input 
                        placeholder="Description"
                        type="text"
                        autoComplete='username'
                        value={teamDescription}
                        onChange={(e) => setTeamDescription(e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        >    
                      </input>
                    </div>
                    <div>
                      <Button>Créer</Button>
                    </div>
                  </form>
                </div>
              </Modal>
      </div>
    </section>
  );
};

export default Teams;