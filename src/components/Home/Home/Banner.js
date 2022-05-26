import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        
        <div className="p-2 md:w-9/12 lg:w-1/2">
          <h1 className="text-5xl font-bold pb-5">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white uppercase font-bold">Get Started</button>
        </div>
        <img className=" md:w-9/12 lg:w-1/2" alt="banner" src={chair} />
      </div>
    </div>
  );
};

export default Banner;
