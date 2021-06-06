import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if (true) {
    throw new Error('Nooooo');
  }
  return (
    <>
      {!!robots.length && robots.map(robot => (<Card key={robot.id} robot={robot}/>))}
    </>
  );
}

export default CardList;