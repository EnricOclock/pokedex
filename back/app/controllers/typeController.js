import { Type } from '../models/associations.js'; //ancien camino '../models/type.model.js';


export async function getAllTypes(req, res) {
    try {

        // Récupérer la liste des Pokemons
        const types = await Type.findAll({
          order: [["name", "asc"]]});
      
        // Renvoyer la liste des Pokemons au format JSON avec le code succès 200
        res.status(200).json(types);
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unexpected server error" });
      }
    }

export async function getOneType(req, res) {
  try {
      //res.send("ok");

    // Je récupere l'ID dans les params
    const typeId = parseInt(req.params.id);

    // Je valide l'ID
    if (!Number.isInteger(typeId)) {
      return res.status(404).json({ error: "Type not found. Please verify the provided ID" });
    }

    // Récupérer le Pokemon by ID
    const oneType = await Type.findByPk(typeId);

     // Je vérifie si le Pokemon existe en BDD
    if (! oneType) {
    return res.status(404).json({ error: "Type not found. Please verify the provided ID" });
  }
  
    // Renvoyer le Pokemon au format JSON avec le code succès 200
    res.status(200).json(oneType);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unexpected server error" });
  }
}

