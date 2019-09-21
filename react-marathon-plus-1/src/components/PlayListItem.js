import React, {useState} from 'react';

const PlayListItem = props =>{

let playListInfo
if (props.highlightStatus === true){
    playListInfo = "hidden"
}
    return (

        <div className = 'whatever'>
        <p onClick = {props.changeHighlight}  className={playListInfo}>{props.name}</p>


        </div>
    )

}


export default PlayListItem;
