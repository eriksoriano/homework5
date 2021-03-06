import React from "react"


// fragment <> are needed b/c react dont like otherwise
function Home () {
    return(
        <>
      {/* <section className="py-4 py-xl-5" style={{margin: "4rem"}}> */}
      <div className="container h-100">
        <div
          className="text-dark bg-gradient border rounded border-0 p-4 py-5"
          style={{height: "70vh"}}>
          <div className="row h-100">
            <div
              className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
              <div>
                <h1 className="text-uppercase fw-bold mb-3">
                  Welcome to my REACT page a.k.a my last assignment for spring 2022
                </h1>
                <p>
                  I have learned so much this semester, I am infatuated with javascript wow.
                  I am excited for summer 2022 because I finally get to relax, and enjoy myself after a long first year of master's degree.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    {/* </section> */}
        </>
    )
}

// must be included to be exported
export default Home;