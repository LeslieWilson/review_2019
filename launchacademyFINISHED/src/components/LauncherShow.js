import React, { useState, useEffect } from 'react'

const LauncherShow = props => {
const [selectedLauncher, setSelectedLauncher] = useState({})

  useEffect(() => {


    let launcherId = props.match.params.id
    fetch(`/api/v1/launcher/${launcherId}`)
    .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {


    setSelectedLauncher(body)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))

  }, [])

  return(
    <div>
      <h1>{selectedLauncher.name}</h1>
      <h4>{selectedLauncher.bio}</h4>
    </div>
  )
}

export default LauncherShow
