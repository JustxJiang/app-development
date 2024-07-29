import React from 'react'

const Card = function(props){
    return(
        <div>
            <div className='card'>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default Card