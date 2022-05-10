import React from "react"
import "./css/Nav.css"
import {Link} from "react-router-dom"

// fragment <> are needed b/c react dont like otherwise
function Playlist () {
    return(
        <>
        {/* // first playlist */}
        <section className="sec1">
        <div className="container">
        <h3 className="">
        This is my other signature playlist:
        </h3>
        <h1 className="big-text">
            Boat Master Playlist
        </h1>
        <h6>
       Mainly used when my friend invites me to their boat, sometimes they ask me to be the DJ; they call  me "DJ Gus"
        </h6>
        </div>

        </section>
        <div className="container">
        <div className="playlist">
        <iframe style={{bordeRadius:"12px"}} src="https://open.spotify.com/embed/playlist/4s1iBJgFsufwsGZTO2fLNs?utm_source=generator&theme=0" width="100%" height="700" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        </div>

        
        {/* // second playlist */}
        <section className="sec1">
        <div className="container">
        <h3 className="">
        And again, my main playlist on Spotify:
        </h3>
        <h1 className="big-text">
           sludge
        </h1>
        <h6>
       I love pop-rock music, it's my favorite genre because I appreciate guitars and screaming singing style, these are
       just some of favorite rock songs so far.
        </h6>
        </div>

        </section>
        <div className="container">
        <div className="playlist">
        <iframe style={{bordeRadius:"12px"}} src="https://open.spotify.com/embed/playlist/1CijWZA4k8mtjrFwGVpQAO?utm_source=generator&theme=0" width="100%" height="700" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>        </div>
        </div>

        {/* // Third playlist */}
        <section className="sec1">
        <div className="container">
        <h3 className="">
       And finally, my thirs most shared playlist:
        </h3>
        <h1 className="big-text">
        Goldschläger
        </h1>
        <h6>
       This last playlist is a mkix of everything I have liked throughout my life. Music really is the center of my life.
        </h6>
        </div>

        </section>
        <div className="container">
        <div className="playlist">
        <iframe style={{bordeRadius:"12px"}} src="https://open.spotify.com/embed/playlist/1CijWZA4k8mtjrFwGVpQAO?utm_source=generator&theme=0" width="100%" height="700" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <br></br>      
        </div>
        </div>


        </>
    )
}

// must be included to be exported
export default Playlist;