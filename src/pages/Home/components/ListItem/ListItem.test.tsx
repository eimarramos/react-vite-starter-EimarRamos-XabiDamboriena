import { Pokemon } from "../../../../types/Pokemon";
import { ListItemComponent } from "./ListItem";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'

test("El componente deberia rederizarse", () => {
    const pokemon: Pokemon = {
        id: 1,
        height: 60,
        image: '',
        name: 'Pikachu',
        stats: [{name: 'ATQ', value: 50}],
        types: ["electric"],
        weight: 80 
    }

    render(<ListItemComponent pokemon={pokemon}/>)
    
    const pokemonName = screen.getByText('Pikachu')
    const pokemonWeight = screen.getByText('80 kg')
    const pokemonHeight = screen.getByText('60 m')

    expect(pokemonName, "El nombre deberia mostrarse").toBeInTheDocument();
    expect(pokemonWeight, "El peso deberia mostrarse").toBeInTheDocument();
    expect(pokemonHeight, "La altura deberia mostrarse").toBeInTheDocument();
})