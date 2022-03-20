import React from 'react';

const Card = (props) =>{
    return(
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow'>
            <img src = {`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <h3>{props.username}</h3>
                <p>{props.email}</p>
            </div>
            
        </div>
    );
}

export default Card;