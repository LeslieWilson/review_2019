import React, {useState} from 'react'
import PlayListItem from '../components/PlayListItem'


const MusicPlayer = (props) => {
    const[highlightId, setHighlight] = useState(null)


    let information = props.data.playlists.map(info =>{
        let highlightStatus
        if(info.id == highlightId){
            highlightStatus = true
        }else{
            highlightStatus = false
        }

        const changeHighlight = () =>{
            return setHighlight(info.id)
        }

    return(
        <PlayListItem
        key = {info.id}
        name = {info.name}
        highlightStatus = {highlightStatus}
        changeHighlight = {changeHighlight}
        />
    )
})


return (
    <div className="app row callout">
    <h2 className="title">React Music Player!!</h2>

    {information}
    </div>
    )
}

export default MusicPlayer
