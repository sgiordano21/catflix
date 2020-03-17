import React from 'react';
import Suggestions from './Suggestions';
import './SuggestionsList.css';

var suggestionsList = [
    
    {
        name: 'Cats',
        imgURL: 'https://pmcdeadline2.files.wordpress.com/2019/12/cats-2-1.jpg'
    },

    {
        name: 'The Fast and the Fur-ious',
        imgURL: 'https://i.pinimg.com/originals/ea/db/b8/eadbb8de2406e5b8cc06a4a30f815060.jpg'

    },
    {
        name: 'Texas ChainPaw Massacre',
        imgURL: 'https://pbs.twimg.com/media/C3rMnpTUYAEXhaX.jpg'

    }
]   

    function SuggestionsList(){
        return(
        <div className='flex-container'>
            {suggestionsList.map((suggestion, index)=>
            <Suggestions
                name={suggestion.name}
                imgURL={suggestion.imgURL}
                key={index}
                />
            )}
         </div>
         )
    }

export default SuggestionsList;