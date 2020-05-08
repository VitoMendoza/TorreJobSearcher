import React from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'

import {persons} from './persons';


const App = () => {
    return(
        <div className='tc'>
            <h1>Find People in Torre</h1>
            <SearchBox />
            <CardList persons={persons}/>

        </div>
    );

}

export default App;