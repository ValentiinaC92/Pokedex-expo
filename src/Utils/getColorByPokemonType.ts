import { POKEMON_TYPE } from "../Constant/pokemon";

const getColorByPokemonType = (type: string) => POKEMON_TYPE[type];

export default getColorByPokemonType;
