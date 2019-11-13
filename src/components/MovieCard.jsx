import React from 'react';
import Pics from './Pics';

var movieCardList = [
    {
        title: 'The PawShank Redemption',
        imgURL:'https://i.imgflip.com/ax7j2.jpg'
    },
    {
        title: 'Catty Shack',
        imgURL:'https://dcassetcdn.com/w1k/submissions/543000/543137_26ed.jpg'
    },
    {
        title: 'Walk The Feline',
        imgURL:'https://i.pinimg.com/originals/18/6e/1c/186e1ce028fd453f321d8ca319b5cbc5.jpg'
    }

]

function MovieCard(){
    return(
        <div>
            {movieCardList.map((post, index) =>
            <Pics
            title = {post.title}
            imgURL = {post.imgURL}
            key={index}
            />
            )}

        </div>
    )
}

export default MovieCard;