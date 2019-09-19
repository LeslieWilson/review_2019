import React from 'react'

const Tweet = props =>{



    return(
        <div className = 'blah'>
        <p>{props.text}</p>
        <p>{props.user.name}</p>
        <p>{props.user.screen_name}</p>
        <p>{props.user.profile_image_url}</p>
        </div>
    )
}


export default Tweet;
