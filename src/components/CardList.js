import React from 'react';
import Card from './Card';

const CardList = ({people}) => {

    if (people.length===0){
        return(<div className='tc'>
            <h3>No results.</h3>
            </div>)
    }

    return(
      <div>
          {
            people.map((user, i) => {

                let amount = '';
                let currency = '';
                let periodicity = '';
                if (people[i].compensations==null){
                    return(
                        <Card 
                            key={i}
                            subjectId={people[i].subjectId}
                            name={people[i].name}
                            username={people[i].username}
                            professionalHeadline={people[i].professionalHeadline}
                            locationName={people[i].locationName}
                            picture={people[i].picture}
                            amount=''
                            currency=''
                            periodicity=''
                        />
                    )
                } 
                if (people[i].compensations.employee==null){
                    if (people[i].compensations.freelancer==null){
                        if (people[i].compensations.intern!=null){
                        
                            amount = people[i].compensations.intern.amount == null ? '' : people[i].compensations.intern.amount;
                            currency = people[i].compensations.intern.currency == null ? '' : people[i].compensations.intern.currency;
                            periodicity = people[i].compensations.intern.periodicity == null ? '' : people[i].compensations.intern.periodicity;    
                            return(
                            <Card 
                            key={i}
                            subjectId={people[i].subjectId}
                            name={people[i].name}
                            username={people[i].username}
                            professionalHeadline={people[i].professionalHeadline}
                            locationName={people[i].locationName}
                            picture={people[i].picture}
                            amount={amount}
                            currency={currency}
                            periodicity={periodicity}
                            />
                            )
                        }
                    }else {
                        amount = people[i].compensations.freelancer.amount == null ? '' : people[i].compensations.freelancer.amount;
                        currency = people[i].compensations.freelancer.currency == null ? '' : people[i].compensations.freelancer.currency;
                        periodicity = people[i].compensations.freelancer.periodicity == null ? '' : people[i].compensations.freelancer.periodicity;
                        return(
                        <Card 
                        key={i}
                        subjectId={people[i].subjectId}
                        name={people[i].name}
                        username={people[i].username}
                        professionalHeadline={people[i].professionalHeadline}
                        locationName={people[i].locationName}
                        picture={people[i].picture}
                        amount={amount}
                        currency={currency}
                        periodicity={periodicity}
                        />
                        )
                    }

                }else {
                    amount = people[i].compensations.employee.amount == null ? '' : people[i].compensations.employee.amount;
                    currency = people[i].compensations.employee.currency == null ? '' : people[i].compensations.employee.currency;
                    periodicity = people[i].compensations.employee.periodicity == null ? '' : people[i].compensations.employee.periodicity;
                    return(
                    <Card 
                        key={i}
                        subjectId={people[i].subjectId}
                        name={people[i].name}
                        username={people[i].username}
                        professionalHeadline={people[i].professionalHeadline}
                        locationName={people[i].locationName}
                        picture={people[i].picture}
                        amount={amount}
                        currency={currency}
                        periodicity={periodicity}
                    />
                    )
                }  

                 return(
                        <Card 
                            key={i}
                            subjectId={people[i].subjectId}
                            name={people[i].name}
                            username={people[i].username}
                            professionalHeadline={people[i].professionalHeadline}
                            locationName={people[i].locationName}
                            picture={people[i].picture}
                            amount=''
                            currency=''
                            periodicity=''
                        />
                    )      
            })
          };
      </div>      
    );
}

export default CardList;