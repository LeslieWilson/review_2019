import React from 'react'

const Tweet = props =>{

    let text =  props.text
    let userName = props.user.name
    let userScreen_name = props.user.screen_name
    let userProfile_image_url = props.user.profile_image_url
    let retweet_count = props.retweet_count
    let favorites_count = props.favorites_count
    let entities = props.entities
    let liked = props.liked
    let retweeted = props.retweeted
    let timestamp_ms= props.timestamp_ms



    return(
        <div>
        {userName}
        {userScreen_name}
        {userProfile_image_url}
        {retweet_count}
        {favorites_count}
        {entities}
        {liked}
        {retweeted}
        {timestamp_ms}
        </div>
    )
}


export default Tweet;
