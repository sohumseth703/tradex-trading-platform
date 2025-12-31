import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return ( 
    <div className="container mt-5">
      <div className="row">

        {/* Left Text Section */}
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a
            href={learnMore}
            style={{textDecoration:"none"}}
          >
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Right Image Section */}
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
