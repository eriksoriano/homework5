import React from "react"

// fragment <> are needed b/c react dont like otherwise
function Videos () {
    return(
        <>
    <section className="sec3">
    <div className="container">
        <h3>
        Some video demos of the projects I have worked on at University of Miami so far
        </h3>
        <h4>Project One</h4>
        <h1 className="big-text">
            myPopFriend Mobile App - Demo
        </h1>
        <h6>
       Created for the class CIM613 - Mobile Application Development
        </h6>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KoLOkut1El8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
    <section className="sec1">
    <div className="container">
    <h4>Project Two</h4>
        <h1 className="big-text">
            myMusico App - Prototype
        </h1>
        <h6>
       Created for the class CIM601 - Prototype Techniques
        </h6>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/G3P_fXyXBI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
    <section className="sec5">
    <div className="container">
    <h4>Project Three</h4>
        <h1 className="big-text">
            Mini Game (Escape Room)
        </h1>
        <h6>
       Created for the class CIM603 - Creative Coding Intro
        </h6>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ivzw8H3g0S8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>


        
        
        </>
    )
}

// must be included to be exported
export default Videos;