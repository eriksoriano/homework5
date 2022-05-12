import React from "react"

// fragment <> are needed b/c react dont like otherwise
function About () {
    return(
    <>
    <section className="sec2">
      <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 mx-auto">
        <h1 className="big-text">
            A little Bio on DJ Gus
        </h1>
          <p className="w-lg-50">
            (a.k.a. Erik Gustavo Soriano)
          </p>
          {/* education section */}
          <p>
            E D U C A T I O N:
            <br></br>
            2021 - Present
            <br></br>
            <strong>Master of Fine Arts (MFA) - Interactive Media</strong>
            <ul>
              <li>User Experience Research (UX)</li>
              <li>Mobile Apps Development</li>
              <li>Front End Development</li>
              <li>UI/UX Design</li>
            </ul>
            <hr></hr>
          </p>
          {/* education section */}

          {/* work section */}
          <p>
            E X P E R I E N C E:
            <br></br>
            <strong>Graphic Designer</strong>
            <br></br>
            2018 - Present
            <br></br>
            Freelance
            <br></br>
            <h4>Miami-Dade County, Florida</h4>
            <hr></hr>
            <br></br>
            <strong>Graphic Designer</strong>
            <br></br>
            2018 - 2022
            <br></br>
            Chariff Realty Group
            <br></br>
            <h4>Miami, Florida</h4>
            <hr></hr>

          </p>



        </div>
      </div>
    </div>
    </section>
 
        </>
    )
}

// must be included to be exported
export default About;