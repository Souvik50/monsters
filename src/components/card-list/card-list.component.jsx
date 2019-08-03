import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = ({ ghosts }) => {
    return (
      <div className="card-list">
        {ghosts.map(ghost => (
          <Card key={ghost.id} ghost={ghost} />
        ))}
      </div>
    );
};

