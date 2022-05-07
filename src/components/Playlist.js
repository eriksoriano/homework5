import React from "react"
import "./css/Nav.css"
import {Link} from "react-router-dom"

// fragment <> are needed b/c react dont like otherwise
function Playlist () {
    return(
        <>
        <h1>
            This is my other signature playlist: the chaos principle
        </h1>
        </>
    )
}

// must be included to be exported
export default Playlist;