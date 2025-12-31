import React from 'react';


function Hero() {
    return ( 
       <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="media/pricingEquity.svg" />
          <h1 className="fs-3">Free equity delivery (Demo)</h1>
          <p className="text-muted">
           All equity delivery simulations are absolutely free — ₹0 demo brokerage.
This is a paper-trading environment for learning purposes.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/intradayTrades.svg" />
          <h1 className="fs-3">Intraday & F&O trades (Simulation)</h1>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per simulated order
across equity, currency, and commodity segments.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/pricingEquity.svg" />
          <h1 className="fs-3">Free direct MF (Demo)</h1>
          <p className="text-muted">
            All direct mutual fund simulations are absolutely free —
₹0 demo commissions & charges.
          </p>
        </div>
      </div>
    </div>
     );
}

export default Hero;