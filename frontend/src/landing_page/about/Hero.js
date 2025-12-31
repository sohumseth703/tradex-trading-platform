import React from 'react';


function Hero() {
    return ( 
       <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            TradeX is an educational full-stack trading platform built as a learning project to understand how modern fintech systems are designed and implemented.</p>

<p>The platform focuses on real-world application workflows such as user authentication, portfolio tracking, holdings management, and dashboard-based data visualization using an MVC architecture.</p>


          
        </div>
        <div className="col-6 p-5">
          <p>
            In addition to core trading features, TradeX explores scalable frontend design, RESTful APIs, and backend data handling commonly used in production-grade applications.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            ,This project is actively developed to strengthen full-stack engineering skills, system design understanding, and best practices in web application architecture.
          </p>
         
        </div>
      </div>
    </div>
     );
}

export default Hero;