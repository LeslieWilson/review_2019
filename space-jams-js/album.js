class Album {
  constructor(id, title, artist){
  this.id = id
  this.title = title
  this.artist = artist
  this.tracks=[]
  }

  summary(){
      let tracksToPrint = ''
      let duration = 0
      this.tracks.forEach((track)=>{
        tracksToPrint += "-"  + track.title  + "\n "
        duration += parseInt(track.duration_ms)

      })
      function millisToMinutesAndSeconds(millis) {
          var minutes = Math.floor(millis / 60000);
          var seconds = ((millis % 60000) / 1000).toFixed(0);
          return minutes + "." + (seconds < 10 ? '0' : '') + seconds;
        }
      duration = millisToMinutesAndSeconds(duration)
      return(`Name(s): ${this.title}\nArtist(s): ${this.artist}\nDuration (min.): ${duration}\nTracks:\n -${tracksToPrint}\n`)

  }
}

module.exports = Album;
