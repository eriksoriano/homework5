import React from "react"

// fragment <> are needed b/c react dont like otherwise
function Footer () {
    return(
        <>
        <footer className="container-full text-center footer">
            <h5>Copyright {new Date().getFullYear()} Erik Gustavo Soriano</h5>

        </footer>
        </>
    )
}

// must be included to be exported
export default Footer;