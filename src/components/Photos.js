import React from "react"

// fragment <> are needed b/c react dont like otherwise
function Photos () {
    return(
        <>

<div className="container" style={{width: "60%", marginTop: "104px"}}>
      <h1>Contact Us</h1>
      <form>
        <label className="form-label">Name</label>
        <input className="form-control" type="text" />
        <label className="form-label">Email</label><input className="form-control" type="text" />
        <label className="form-label">Message</label><textarea className="form-control"></textarea><button
          className="btn btn-warning btn-lg"
          type="submit"
          style={{maxWidth: "200px", width: "200px", marginTop: "51px"}}>Button</button>
      </form>
    </div>
        
        
        </>
    )
}

// must be included to be exported
export default Photos;