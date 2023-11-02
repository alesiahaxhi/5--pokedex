import React, { Component } from "react";

import './Pokecard.css';

const gif = 'https://img.pokemondb.net/sprites/black-white/anim/normal/';

class Pokecard extends Component {
    render() {
        let imgSrc = `${gif}${this.props.id}.gif`
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title' >{this.props.name}</h1>
                <div className='Pokecard-img'>
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className='Pokecard-data' >Type: {this.props.type}</div>
                <div className='Pokecard-data' >Exp: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;