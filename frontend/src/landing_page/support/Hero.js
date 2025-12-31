import React from 'react';

function Hero() {
  return (
    <>
      {/* CSS INSIDE COMPONENT */}
      <style>{`
        .support-hero {
          background-color: #387ed1;
          min-height: 420px;
          color: white;
        }

        .support-top {
          height: 60px;
        }

        .support-top a {
          color: white;
          text-decoration: underline;
        }

        .support-input {
          width: 90%;
          padding: 12px 14px;
          margin: 15px 0;
          border-radius: 4px;
          border: none;
          outline: none;
        }

        .support-links {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .support-links a,
        ol a {
          color: white;
          font-size: 14px;
          text-decoration: underline;
        }

        ol {
          padding-left: 18px;
        }
      `}</style>

      <section className="container-fluid support-hero">

        {/* Top bar */}
        <div className="support-top d-flex justify-content-between align-items-center px-5 pt-3">
          <h5>Support Portal</h5>
          <a href="#">Track Tickets</a>
        </div>

        {/* Content */}
        <div className="row px-5 py-4">

          {/* Left */}
          <div className="col-md-6">
            <h3>
              Search for an answer or browse help topics to create a ticket
            </h3>

            <input
              className="support-input"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            />

            <div className="support-links">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          {/* Right */}
          <div className="col-md-6">
            <h4>Featured</h4>
            <ol>
              <li>
                <a href="#">Current Takeovers and Delisting – January 2024</a>
              </li>
              <li>
                <a href="#">Latest Intraday leverages – MIS & CO</a>
              </li>
            </ol>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;
