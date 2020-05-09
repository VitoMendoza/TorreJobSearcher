import React from 'react';

const SearchBox = ({searchfield, searchChange, keyPress}) => {
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba b--gray bg-black'
                type='search'
                placeholder='search people'
                onChange={searchChange}
                onKeyDown={keyPress}
            />
        </div>
    );
}

export default SearchBox;