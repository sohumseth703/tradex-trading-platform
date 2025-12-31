import React from 'react';


function Brokerage() {
    return ( 

        <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>
              This brokerage calculator is provided for educational and simulation purposes only.
            </li>
            <li>All charges displayed are part of a demo trading environment and do not represent real brokerage fees.</li>
            <li>
               Digital trade summaries are generated for learning and practice.
            </li>
            <li>
              No physical contract notes or real financial documents are issued.
            </li>
            <li>
              Charges shown for different account types are simulated to mirror real-world scenarios.
            </li>
            <li>
              Virtual penalties may be applied within the simulation to demonstrate risk and order management concepts.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
     );
}

export default Brokerage;