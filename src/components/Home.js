import React from "react"

// fragment <> are needed b/c react dont like otherwise
function Home () {
    return(
        <>
            <section className="py-4 py-xl-5" style={{margin: "4rem"}}>
      <div className="container h-100">
        <div
          className="text-dark bg-warning bg-gradient border rounded border-0 p-4 py-5"
          style={{height: "70vh"}}>
          <div className="row h-100">
            <div
              className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center"
            >
              <div>
                <h1 className="text-uppercase fw-bold text-dark mb-3">
                  Welcome to my REACT page a.k.a my last assignment for spring 2022
                </h1>
                <p className="mb-4">
                  I have learned so much this semester, I am infatuated with javascript wow.
                </p>
                <button className="btn btn-light fs-5 py-2 px-4" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

// must be included to be exported
export default Home;