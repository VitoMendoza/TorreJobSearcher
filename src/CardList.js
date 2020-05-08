import React from 'react';
import Card from './Card';

const CardList = ({persons}) => {
    return(
      <div>
          {
            persons.map((user, i) => {
                return(
                    <Card 
                        key={i}
                        id={persons[i].id}
                        name={persons[i].name}
                        email={persons[i].email}
                    />
                )
            })
          };
      </div>      
    );
}

export default CardList;