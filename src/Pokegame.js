import React, { Component } from 'react'

import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { name: 'Mienshao', id: 'mienshao', type: 'fighting', exp: 521 },
            { name: 'Venusaur', id: 'venusaur', type: 'grass', exp: 525 },
            { name: 'Raichu', id: 'raichu', type: 'electric', exp: 485 },
            { name: 'Ninetales', id: 'ninetales', type: 'fire', exp: 505 },
            { name: 'Wigglytuff', id: 'wigglytuff', type: 'normal', exp: 435 },
            { name: 'Jellicent', id: 'jellicent', type: 'water', exp: 480 },
            { name: 'Golurk', id: 'golurk', type: 'ground', exp: 483 },
            { name: 'Reuniclus', id: 'reuniclus', type: 'psychic', exp: 490 }
        ]
    }
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];

        while (hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon)
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0);
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        )

    }
}

export default Pokegame;