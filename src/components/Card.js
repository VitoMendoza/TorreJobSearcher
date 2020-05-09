import React from 'react';

const Card = ({ subjectId, 
                name, 
                professionalHeadline, 
                locationName, 
                picture, 
                amount, 
                currency, 
                periodicity}) => {
    let picturelink = picture;
    if (picture==null){
        picturelink='https://voxpopulii.in/system/static/dashboard/img/default_user.png';
    }

return(
    <div className='bg-dark-gray dib br3 pa2 ma2 grow bw2 shadow-5' id={`${subjectId}`}>
        <div className=''>
            <div className=''>
                <img className="br-100 pa1 ba b--black-10 h3 w3" src={`${picturelink}`} alt='foto'/>
            </div>
            <div>
                <h2>{name}</h2>
                <h3>{professionalHeadline}</h3>
                <p>{locationName}</p>
                <h3 className='rate'>Rate: {amount}{currency} {periodicity}</h3>
            </div>
        </div>
        
    </div>
)

}

export default Card;