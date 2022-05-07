import React from "react"

// fragment <> are needed b/c react dont like otherwise
function Footer () {
    return(
        <>
        <footer className="container-full bg-warning text-center">
            <p>Copyright {new Date().getFullYear()} Erik Soriano</p>

        </footer>
        </>
    )
}

// must be included to be exported
export default Footer;