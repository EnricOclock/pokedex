const apiBaseUrl = import.meta.env.VITE_API_URL_V1  || "http://localhost:3001/api";

export async function getPokemons() {
    try {
        
        // On récupère les listes par on les console.log : fetch : GET /pokemons
        const httpResponse = await fetch(`${apiBaseUrl}/pokemons`);
        
        // CAS où le backend ne répond mais avec un status d'erreur
        if (! httpResponse.ok) {
          console.error(httpResponse);
          return null; // si une erreur a lieu, on renvoie null
        }
    
        const pokemons = await httpResponse.json(); // [{}, {}, {}]
        //console.log(pokemons[0]);
        return pokemons;
    
      } catch (error) {
        // CAS où le backend ne répond pas
        console.error(error);
        return null; // Si une erreur a lieu, on renvoie null
      }
    }

export async function getOnePokemon() {
    try {
          const pokemonId = parseInt(req.params.id);
         // On récupère les listes par on les console.log : fetch : GET /pokemons/:id
          const httpResponse = await fetch(`${apiBaseUrl}/pokemons/${pokemonId}`);
          
          // CAS où le backend ne répond mais avec un status d'erreur
          if (! httpResponse.ok) {
          console.error(httpResponse);
          return null; // si une erreur a lieu, on renvoie null
          }
      
          const pokemon = await httpResponse.json(); // [{}, {}, {}]
          
          return pokemon;
      
        } catch (error) {
          // CAS où le backend ne répond pas
          console.error(error);
          return null; // Si une erreur a lieu, on renvoie null
        }
      }   

export async function getTeams(team) {
  try {
      
      // On récupère les listes par on les console.log : fetch : GET /teams
      const httpResponse = await fetch(`${apiBaseUrl}/teams`);
      //console.log(httpResponse)
      // CAS où le backend ne répond mais avec un status d'erreur
      if (! httpResponse.ok) {
        console.error(httpResponse);
        return null; // si une erreur a lieu, on renvoie null
      }
  
      const teams = await httpResponse.json(); // [{}, {}, {}]
      //console.log(teams);
      return teams;
  
    } catch (error) {
      // CAS où le backend ne répond pas
      console.error(error);
      return null; // Si une erreur a lieu, on renvoie null
    }
  }

export async function getOneTeam() {
  try {
        const teamId = parseInt(req.parmas.id);
        // On récupère les listes par on les console.log : fetch : GET /pokemons/:id
        const httpResponse = await fetch(`${apiBaseUrl}/teams/${teamId}`);
        //console.log(httpResponse)
        // CAS où le backend ne répond mais avec un status d'erreur
        if (! httpResponse.ok) {
        console.error(httpResponse);
        return null; // si une erreur a lieu, on renvoie null
        }
    
        const team = await httpResponse.json(); // [{}, {}, {}]
        //console.log(pokemons);
        return team;
    
      } catch (error) {
        // CAS où le backend ne répond pas
        //console.error(error);
        return null; // Si une erreur a lieu, on renvoie null
      }
    } 

export async function getTypes(type) {
  try {
      
      // On récupère les listes par on les console.log : fetch : GET /pokemons
      const httpResponse = await fetch(`${apiBaseUrl}/types`);
      
      // CAS où le backend ne répond mais avec un status d'erreur
      if (! httpResponse.ok) {
        console.error(httpResponse);
        return null; // si une erreur a lieu, on renvoie null
      }
  
      const types = await httpResponse.json(); // [{}, {}, {}]
      return types;
  
    } catch (error) {
      // CAS où le backend ne répond pas
      console.error(error);
      return null; // Si une erreur a lieu, on renvoie null
    }
  }

export async function getOneType() {
  try {
        const typeId = parseInt(req.parmas.id);
        // On récupère les listes par on les console.log : fetch : GET /pokemons/:id
        const httpResponse = await fetch(`${apiBaseUrl}/types/${typeId}`);
        //console.log(httpResponse)
        // CAS où le backend ne répond mais avec un status d'erreur
        if (! httpResponse.ok) {
        console.error(httpResponse);
        return null; // si une erreur a lieu, on renvoie null
        }
    
        const type = await httpResponse.json(); // [{}, {}, {}]
        //console.log(type);
        return type;
    
      } catch (error) {
        // CAS où le backend ne répond pas
        //console.error(error);
        return null; // Si une erreur a lieu, on renvoie null
      }
    }

export async function createTeam(teamData) {
  try {

    // - POST /api/lists + BODY { title }
    const httpResponse = await fetch(`${apiBaseUrl}/teams`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teamData)
    });

    if (! httpResponse.ok) {
      console.error(httpResponse);
      return null;
    }
  
    // - Récupérer la réponse de l'API (liste créée)
    const createdTeam = await httpResponse.json();
    return createdTeam;

  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateTeam(teamId, teamData) {
  try {

    const httpResponse = await fetch(`${apiBaseUrl}/teams/${teamId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teamData)
    });
  
    if (! httpResponse.ok) {
      console.error(httpResponse);
      return null;
    }
  
    const updatedTeam = await httpResponse.json();
    return updateupdatedTeam;

  } catch (error) {
    console.error(error);
    return null;
  }
}
    
export async function deleteTeam(teamId) {
  try {

    const httpResponse = await fetch(`${apiBaseUrl}/lists/${teamId}`, {
      method: "DELETE"
    });
  
    // Pas besoin de parser le JSON, parceque la route DELETE /api/lists/listId ne renvoie pas de body, juste un 204
    return httpResponse.ok; // true || false

  } catch (error) {
    console.error(error);
    return false;
  }
}