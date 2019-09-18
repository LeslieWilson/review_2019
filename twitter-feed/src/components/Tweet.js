import React from 'react'

const Tweet = props =>{

    // let text =  props.text
    // let userName = props.user.name
    // let userScreen_name = props.user.screen_name
    // let userProfile_image_url = props.user.profile_image_url
    // let retweet_count = props.retweet_count
    // let favorites_count = props.favorites_count
    // let entities = props.entities
    // let liked = props.liked
    // let retweeted = props.retweeted
    // let timestamp_ms= props.timestamp_ms



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
