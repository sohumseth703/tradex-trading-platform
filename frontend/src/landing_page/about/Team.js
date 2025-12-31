import React from 'react';


function Team() {
    return ( 
        <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/my_photo_2.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Sohum Seth</h4>
          <h6>Developer (Student Project)</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            TradeX is an educational full-stack trading platform built by Sohum Seth to understand real-world fintech systems, MVC architecture, and dashboard-driven applications.</p>

           <p>This project is inspired by modern trading platforms and is intended purely for learning and demonstration purposes.</p>
          <p>
            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
            <a href=""  style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
     );
}

export default Team;