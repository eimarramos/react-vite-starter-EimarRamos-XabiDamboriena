import { Pokemon } from "../../../../models/Pokemon";
import { ListItemComponent } from "./ListItem";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'

test("El componente deberia rederizarse", () => {
    const pokemon: Pokemon = {
        id: 1,
        height: 50,
        image: '',
        name: 'Pikachu',
        stats: [{name: 'ATQ', value: 50}],
        types: [{name: 'electric', url: ''}],
        weight: 50 
    }

    render(<ListItemComponent pokemon={pokemon}/>)
    
    const pokemonName = screen.findByText('Pikachu')

    expect(pokemonName).toBeInTheDocument();
})