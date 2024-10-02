export type ResponsePokemon = {
    count: number,
    next: string,
    previous: null,
    results: Pokemon[]
};

export type Pokemon = {
    name: string,
    url: string
}

export type PokemonCard = {
    url: string,
    name: string
}

export type pokemonEvolutionsList = {
    pokemons: PokemonDetail[]
}

export type PokemonDetail = {
    id: string
    name: string
    order: number
    sprites: PokemonImage,
    types: PokemonType[],
    abilities: PokemonAbilities[],
    height: number,
    weight: number,
    genera: string,
    stats: Stat[]
}

export type PokemonAbilities = {
    ability: {
        name: string,
        url: string
    }
}

export type PokemonImage = {
    other: {
        "official-artwork": {
            front_default: string
        }
    }
}

export type PokemonType = {
    slot: number
    type: {
        name: string
    }
}

export type Type = {
    name: string;
    url: string;
};

export type PokemonTypeName =
    | "grass"
    | "fire"
    | "water"
    | "poison"
    | "normal"
    | "bug"
    | "flying"
    | "electric"
    | "ground"
    | "dark"
    | "dragon"
    | "fairy"
    | "fighting"
    | "ghost"
    | "psychic"
    | "rock"
    | "steel"
    | "ice";

export type EggGroup = {
    name: string;
    url: string;
};

export type FlavorTextEntry = {
    flavor_text: string;
    language: {
        name: string;
        url: string;
    };
    version: {
        name: string;
        url: string;
    };
};

export type Genera = {
    genus: string;
    language: {
        name: string;
        url: string;
    };
};

export type Name = {
    language: {
        name: string;
        url: string;
    };
    name: string;
};

export type PokemonAbout = {
    base_happiness: number;
    capture_rate: number;
    color: {
        name: string;
        url: string;
    };
    egg_groups: EggGroup[];
    flavor_text_entries: FlavorTextEntry[];
    gender_rate: number;
    genera: Genera[];
    names: Name[];
    order: number;
    evolution_chain: {
        url: string;
    };
    growth_rate: {
        name: string
    }
}

export type Gender = {
    gender: 'genderless' | 'male' | 'female';
    rate?: number;
};

export type Stat = {
    base_stat: number,
    stat: {
        name: string,
        url: string
    }
}

export type Evolutions = {
    chain: {
        evolves_to: EvolutionTo[],
        species: Specie
    },
}

export type EvolutionTo = {
    species: Specie,
    evolves_to: EvolutionTo[],
}

export type Specie = {
    name: string,
    url: string
}