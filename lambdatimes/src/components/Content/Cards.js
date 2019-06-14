import React, { Component } from 'react';
import Card from './Card';
import uuid from 'uuid';
import pt from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
          props.cards.map(card => (
          <Card key={uuid()} card={card}/>
          ))
      }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: pt.arrayOf(pt.shape({
    author: pt.string,
    headline: pt.string,
    img: pt.string,
    tab: pt.string
  }))
}

export default Cards;