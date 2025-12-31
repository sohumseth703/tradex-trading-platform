import React from 'react';


function Footer() {
    return ( 
        <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/Tradex.png" style={{ width: "50%" }} />
            <p>
              &copy; TradeX
2025 TradeX. Educational Project.

            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="" className='text-muted' style={{textDecoration:"none"}}>About</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Products</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Pricing</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Referral programme</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Careers</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>TradeX.tech</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Press & media</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>TradeX cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Contact</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Support portal</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Z-Connect blog</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>List of charges</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Open an account</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>Fund transfer</a>
            <br />
            <a href="" className='text-muted' style={{textDecoration:"none"}}>60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
           TradeX is a student-built educational platform created for learning purposes only.
It does not provide real trading, broking, or financial services.

          </p>
        </div>
      </div>
    </footer>
     );
}

export default Footer;