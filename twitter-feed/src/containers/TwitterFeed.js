import React from 'React';
import Tweet from "../components/Tweet"

const TwitterFeed = (props) => {

    let information = props.data.map(tweet =>{
        return(
            <Tweet
            key = {tweet.id_str}
            text =  {tweet.text}
            user = {tweet.user}
            retweet_count = {tweet.retweet_count}
            favorites_count = {tweet.favorites_count}
            entities = {tweet.entities}
            liked = {tweet.liked}
            retweeted = {tweet.retweeted}
            timestamp_ms = {tweet.timestamp_ms}
            />

        )
    })

  return(
    <div>
    <h1>twitter dude</h1>
    <p> heres some static info and a navbar</p>
    <ul>
    {information}
    </ul>
    </div>
  )

}

export default TwitterFeed;
