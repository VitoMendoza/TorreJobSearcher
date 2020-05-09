import React from 'react';


const Card = ({ subjectId, 
                name,
                username, 
                professionalHeadline, 
                locationName, 
                picture, 
                amount, 
                currency, 
                periodicity}) => {

    let professionalTitle =  professionalHeadline.length > 40 ? professionalHeadline.slice(0, 37) + '...' : professionalHeadline;
    let picturelink = picture == null ? 'https://voxpopulii.in/system/static/dashboard/img/default_user.png' : picture;
    let rate = amount === '' ? 'Private' : amount + currency + ' ' + periodicity;                
return(
    <div className='bg-dark-gray dib br3 pa2 ma2 grow bw2 shadow-5' id={`${subjectId}`}>
        <div className=''>
            <div className=''>
                <img className="br-100 pa1 ba b--black-10 h3 w3" src={`${picturelink}`} alt='foto'/>
            </div>
            <div>               
                <a href={`https://bio.torre.co/${username}`} target='_blank' rel="noopener noreferrer"><h2>{name}</h2></a>
                <h3>{professionalTitle}</h3>
                <p>{locationName}</p>
                <h3 className='rate'>Rate: {rate}</h3>
            </div>
        </div>
        
    </div>
)

}

export default Card;