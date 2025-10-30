import { Router } from "express";
import * as pokemonController from "./controllers/pokemon.js";
import * as teamController from "./controllers/team.js";
import * as typeController from "./controllers/type.js";



export const router = Router();

//Pokemons routes
router.get("/pokemons", pokemonController.getAllPokemons);
router.get("/pokemons/:id", pokemonController.getOnePokemonAndTypes);


//Teams routes
router.get("/teams", teamController.getAllTeams);
router.get("/teams/:id", teamController.getOneTeam);

router.post("/teams", teamController.createOneTeam);
router.patch("/teams/:id", teamController.updateTeam);
router.delete("/teams/:id", teamController.deleteTeam);

//Types routes
router.get("/types", typeController.getAllTypes);
router.get("/types/:id", typeController.getOneType);

