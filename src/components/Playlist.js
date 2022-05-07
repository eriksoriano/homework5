import React from "react"
import "./css/Nav.css"
import {Link} from "react-router-dom"

// fragment <> are needed b/c react dont like otherwise
function Playlist () {
    return(
        <>
        <div className="container">
        <iframe style={{bordeRadius:"12px"}} src="https://open.spotify.com/embed/playlist/4s1iBJgFsufwsGZTO2fLNs?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        
        <h1>
            This is my other signature playlist: the chaos principle
        </h1>
        </div>
        </>
    )
}

// must be included to be exported
export default Playlist;